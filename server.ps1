param (
    [int]$Port = 5000
)

$baseDir = (Get-Location).Path

$mimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.htm'  = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.svg'  = 'image/svg+xml'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.jpeg' = 'image/jpeg'
    '.gif'  = 'image/gif'
    '.ico'  = 'image/x-icon'
    '.pdf'  = 'application/pdf'
    '.pptx' = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
}

$listener = New-Object System.Net.HttpListener
$prefix = 'http://localhost:' + $Port + '/'
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    $Port = 8080
    $prefix = 'http://localhost:' + $Port + '/'
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    $listener.Start()
}

Write-Host ('=================================================') -ForegroundColor Cyan
Write-Host ('  BBIT Evening Class Portal Web Server') -ForegroundColor Green
Write-Host ('  URL: ' + $prefix) -ForegroundColor Yellow
Write-Host ('  Serving directory: ' + $baseDir) -ForegroundColor Gray
Write-Host ('=================================================') -ForegroundColor Cyan

# Open in default browser
Start-Process $prefix

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath
        if ($path -eq '/' -or [string]::IsNullOrWhiteSpace($path)) {
            $path = '/index.html'
        }

        $relPath = $path.TrimStart('/').Replace('/', '\')
        $filePath = Join-Path $baseDir $relPath

        if (Test-Path -LiteralPath $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = 'application/octet-stream'
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host ('200 ' + $request.HttpMethod + ' ' + $path) -ForegroundColor Green
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
            $response.ContentType = 'text/plain'
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            Write-Host ('404 ' + $request.HttpMethod + ' ' + $path) -ForegroundColor Red
        }

        $response.OutputStream.Close()
    } catch {
        # ignore client aborted connections
    }
}
