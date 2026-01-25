# Script para iniciar o servidor de desenvolvimento
# Atualiza o PATH e executa npm run dev

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "Iniciando servidor de desenvolvimento..." -ForegroundColor Green
& "C:\Program Files\nodejs\npm.cmd" run dev
