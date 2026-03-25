/**
 * SVG shimmer placeholder para Next.js Image.
 * Gera um data-URI leve que serve como blurDataURL,
 * exibindo um efeito de loading suave enquanto a imagem real carrega.
 */

const shimmerSvg = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e5e7eb" offset="20%" />
      <stop stop-color="#f3f4f6" offset="50%" />
      <stop stop-color="#e5e7eb" offset="80%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e5e7eb" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)">
    <animateTransform attributeName="transform" type="translate"
      values="-${w};0;${w};0" dur="1.5s" repeatCount="indefinite" />
  </rect>
</svg>`

function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : btoa(str)
}

export const shimmerPlaceholder = (w = 400, h = 500) =>
  `data:image/svg+xml;base64,${toBase64(shimmerSvg(w, h))}`
