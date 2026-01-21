$portfolioFiles = Get-ChildItem -Path "c:\Users\Ehsan\dev\astro-template\src\content\portfolio" -Filter "*.md" -Recurse
$productFiles = Get-ChildItem -Path "c:\Users\Ehsan\dev\astro-template\src\content\products" -Filter "*.md" -Recurse

$portfolioData = @()
$productData = @()

foreach ($file in $portfolioFiles) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match '(?s)---(.+?)---') {
        $yaml = $matches[1]
        $obj = @{
            file = $file.Name
            path = $file.DirectoryName.Split('\')[-1]
        }
        
        if ($yaml -match 'title:\s*"?([^"\n]+)"?') { $obj.title = $matches[1].Trim() }
        if ($yaml -match 'date:\s*"?([^"\n]+)"?') { $obj.date = $matches[1].Trim() }
        if ($yaml -match 'agency:\s*"?([^"\n]+)"?') { $obj.agency = $matches[1].Trim() }
        if ($yaml -match 'client:\s*"?([^"\n]+)"?') { $obj.client = $matches[1].Trim() }
        if ($yaml -match 'description:\s*"?([^"\n]+)"?') { $obj.description = $matches[1].Trim() }
        
        # Extract technologies from tag section
        if ($yaml -match 'tag:\s*\n((?:\s+-\s+.+\n)+)') {
            $tags = $matches[1] -split '\n' | ForEach-Object { 
                if ($_ -match '-\s+(.+)') { $matches[1].Trim().Trim('"') }
            } | Where-Object { $_ }
            $obj.technologies = $tags -join ', '
        }
        
        $portfolioData += [PSCustomObject]$obj
    }
}

foreach ($file in $productFiles) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match '(?s)---(.+?)---') {
        $yaml = $matches[1]
        $obj = @{
            file = $file.Name
            path = $file.DirectoryName.Split('\')[-1]
        }
        
        if ($yaml -match 'title:\s*"?([^"\n]+)"?') { $obj.title = $matches[1].Trim() }
        if ($yaml -match 'date:\s*"?([^"\n]+)"?') { $obj.date = $matches[1].Trim() }
        if ($yaml -match 'description:\s*"?([^"\n]+)"?') { $obj.description = $matches[1].Trim() }
        
        # Extract technologies from tag section
        if ($yaml -match 'tag:\s*\n((?:\s+-\s+.+\n)+)') {
            $tags = $matches[1] -split '\n' | ForEach-Object { 
                if ($_ -match '-\s+(.+)') { $matches[1].Trim().Trim('"') }
            } | Where-Object { $_ }
            $obj.technologies = $tags -join ', '
        }
        
        $productData += [PSCustomObject]$obj
    }
}

Write-Output "=== PORTFOLIO SUMMARY ==="
Write-Output "Total: $($portfolioData.Count)"
Write-Output ""
$portfolioData | ConvertTo-Json -Depth 10 | Out-File "c:\Users\Ehsan\dev\astro-template\portfolio-data.json"

Write-Output "=== PRODUCT SUMMARY ==="
Write-Output "Total: $($productData.Count)"
Write-Output ""
$productData | ConvertTo-Json -Depth 10 | Out-File "c:\Users\Ehsan\dev\astro-template\product-data.json"

Write-Output "Data exported to portfolio-data.json and product-data.json"
