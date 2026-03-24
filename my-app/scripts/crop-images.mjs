/**
 * crop-images.mjs
 *
 * Recorta todas as imagens de produto para proporção 4:5 (padrão Instagram/iFood).
 * Ponto focal: 50% horizontal, 40% vertical (bias superior para food photography).
 *
 * Uso:
 *   node scripts/crop-images.mjs           → processa e salva em public/images/_cropped/
 *   node scripts/crop-images.mjs --replace → sobrescreve os originais (faz backup antes)
 *
 * Revisa os resultados em _cropped/ antes de usar --replace.
 */

import sharp from "sharp"
import { readdir, mkdir, copyFile, readFile, writeFile } from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

// Proporção alvo: 4 wide : 5 tall
const TARGET_RATIO = 4 / 5

// Ponto focal — mesmo valor do DEFAULT_IMAGE_POSITION no CSS
const FOCAL_X = 0.50  // centro horizontal
const FOCAL_Y = 0.40  // 40% do topo (bias superior)

// Pastas de imagens de produto (relativo a public/)
const PRODUCT_DIRS = [
  "images/bebidas",
  "images/Comidas",
  "images/Dodia",
]

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"])

const REPLACE_MODE = process.argv.includes("--replace")

// ─── helpers ────────────────────────────────────────────────────────────────

function cropParams(width, height) {
  const naturalRatio = width / height

  let cropW, cropH

  if (naturalRatio > TARGET_RATIO) {
    // Imagem mais larga que 4:5 → corta as laterais, mantém altura total
    cropH = height
    cropW = Math.round(height * TARGET_RATIO)
  } else {
    // Imagem mais alta que 4:5 (ou igual) → corta topo/base, mantém largura total
    cropW = width
    cropH = Math.round(width / TARGET_RATIO)
  }

  // Posição do canto superior esquerdo do crop
  const left = Math.round((width - cropW) * FOCAL_X)
  const top  = Math.round((height - cropH) * FOCAL_Y)

  return {
    left:   Math.max(0, Math.min(left, width  - cropW)),
    top:    Math.max(0, Math.min(top,  height - cropH)),
    width:  cropW,
    height: cropH,
  }
}

async function processImage(inputPath, outputPath) {
  // Lê em buffer para liberar o file handle antes de qualquer escrita (Windows)
  const inputBuffer = await readFile(inputPath)
  const image = sharp(inputBuffer)
  const { width, height, format } = await image.metadata()

  if (!width || !height) {
    console.warn(`  ⚠ ignorado (sem metadata): ${path.basename(inputPath)}`)
    return null
  }

  const crop = cropParams(width, height)

  // Se já está no ratio certo (dentro de 1px de tolerância), copia sem reprocessar
  const alreadyCropped =
    Math.abs(width / height - TARGET_RATIO) < 0.01

  if (alreadyCropped) {
    await copyFile(inputPath, outputPath)
    console.log(`  ─ já em 4:5, copiado:  ${path.basename(inputPath)} [${width}×${height}]`)
    return { skipped: true }
  }

  // sharp(inputBuffer) já não tem lock no arquivo — escreve direto no destino
  const buffer = await sharp(inputBuffer).extract(crop).toBuffer()
  await writeFile(outputPath, buffer)

  console.log(
    `  ✓ ${path.basename(inputPath).padEnd(40)} ` +
    `[${width}×${height}] → [${crop.width}×${crop.height}]`
  )

  return { width, height, crop }
}

// ─── main ────────────────────────────────────────────────────────────────────

async function run() {
  console.log(`\n📐 crop-images — proporção alvo: 4:5 | focal: ${FOCAL_X * 100}% × ${FOCAL_Y * 100}%`)
  console.log(`   modo: ${REPLACE_MODE ? "SUBSTITUIR ORIGINAIS (backup em _originals/)" : "PRÉVIA em _cropped/"}\n`)

  let total = 0
  let processed = 0
  let skipped = 0

  for (const relDir of PRODUCT_DIRS) {
    const inputDir  = path.join(ROOT, "public", relDir)
    const outputDir = REPLACE_MODE
      ? path.join(ROOT, "public", relDir)                          // mesmo lugar
      : path.join(ROOT, "public", "images", "_cropped", path.basename(relDir))

    // Backup apenas no modo --replace
    const backupDir = path.join(ROOT, "public", "images", "_originals", path.basename(relDir))

    await mkdir(outputDir, { recursive: true })

    let files
    try {
      files = await readdir(inputDir)
    } catch {
      console.warn(`  ⚠ pasta não encontrada: ${relDir}`)
      continue
    }

    console.log(`📁 ${relDir}`)

    for (const file of files) {
      const ext = path.extname(file).toLowerCase()
      if (!IMAGE_EXTS.has(ext)) continue

      total++
      const inputPath  = path.join(inputDir, file)
      const outputPath = path.join(outputDir, file)

      // Modo replace: faz backup antes de sobrescrever
      if (REPLACE_MODE) {
        await mkdir(backupDir, { recursive: true })
        await copyFile(inputPath, path.join(backupDir, file))
      }

      const result = await processImage(inputPath, outputPath)
      if (result?.skipped) skipped++
      else processed++
    }

    console.log("")
  }

  console.log("─".repeat(60))
  console.log(`✅ ${processed} processadas  |  ${skipped} já estavam em 4:5  |  ${total} total`)

  if (!REPLACE_MODE) {
    console.log(`\n👀 Revise os resultados em:  public/images/_cropped/`)
    console.log(`   Se aprovado, rode: node scripts/crop-images.mjs --replace\n`)
  } else {
    console.log(`\n🗂  Originais salvos em:  public/images/_originals/\n`)
  }
}

run().catch((err) => {
  console.error("Erro:", err)
  process.exit(1)
})
