# Downloads placeholder images into src/assets/gallery
$dest = "src/assets/gallery"
if (-not (Test-Path $dest)) { New-Item -ItemType Directory -Path $dest -Force | Out-Null }

$urls = @(
    'https://picsum.photos/800/600?random=101',
    'https://picsum.photos/800/600?random=102',
    'https://picsum.photos/800/600?random=103',
    'https://picsum.photos/800/600?random=104',
    'https://picsum.photos/800/600?random=105',
    'https://picsum.photos/800/600?random=106'
)

for ($i = 0; $i -lt $urls.Count; $i++) {
    $out = Join-Path $dest ("img{0}.jpg" -f ($i + 1))
    Write-Host "Downloading $($urls[$i]) -> $out"
    try {
        Invoke-WebRequest -Uri $urls[$i] -OutFile $out -UseBasicParsing -ErrorAction Stop
    } catch {
        Write-Warning "Failed to download $($urls[$i]): $_"
    }
}

Write-Host "Done. Images saved to $dest"
