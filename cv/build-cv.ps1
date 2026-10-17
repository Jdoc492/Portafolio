# Genera src/assets/Jose-Ochoa-CV.pdf a partir de cv/cv.html usando Microsoft Edge
$root = Split-Path $PSScriptRoot -Parent
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$out = Join-Path $root "src\assets\Jose-Ochoa-CV.pdf"
$html = "file:///" + (Join-Path $root "cv\cv.html").Replace("\", "/")
$p = Start-Process -FilePath $edge -PassThru -ArgumentList "--headless=new", "--disable-gpu", "--no-first-run",
  "--user-data-dir=$env:TEMP\cv-edge-profile", "--no-pdf-header-footer", "--print-to-pdf=$out", $html
$p | Wait-Process -Timeout 60 -ErrorAction SilentlyContinue
Write-Host "CV generado en $out"
