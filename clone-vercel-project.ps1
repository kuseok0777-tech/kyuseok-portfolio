# Clone Vercel project by project ID (gets Git URL via API then git clone)
# Usage: $env:VERCEL_TOKEN = "your_token"; .\clone-vercel-project.ps1
# Get token: https://vercel.com/account/tokens

$projectId = "prj_jiquWv1Avaf8HJOPiKzDg37Cptm5"
$apiUrl = "https://api.vercel.com/v9/projects/$projectId"

if (-not $env:VERCEL_TOKEN) {
    Write-Host "VERCEL_TOKEN not set. Get token from https://vercel.com/account/tokens"
    Write-Host "Then: `$env:VERCEL_TOKEN = 'your_token'; .\clone-vercel-project.ps1"
    Write-Host "Or get Git URL from Vercel Dashboard -> Project -> Settings -> Git"
    exit 1
}

$headers = @{ Authorization = "Bearer $env:VERCEL_TOKEN" }
try {
    $project = Invoke-RestMethod -Uri $apiUrl -Headers $headers -Method Get
} catch {
    Write-Host "API error: $_"
    exit 1
}

$link = $project.link
if (-not $link) {
    Write-Host "No Git repo linked to this project."
    exit 1
}

$cloneUrl = $null
switch ($link.type) {
    "github" { $cloneUrl = "https://github.com/$($link.org)/$($link.repo).git" }
    "github-limited" { $cloneUrl = "https://github.com/$($link.org)/$($link.repo).git" }
    "gitlab" { $cloneUrl = "https://gitlab.com/$($link.org)/$($link.repo).git" }
    "bitbucket" { $cloneUrl = "https://bitbucket.org/$($link.org)/$($link.repo).git" }
    default { if ($link.host) { $cloneUrl = "https://$($link.host)/$($link.org)/$($link.repo).git" } }
}

if (-not $cloneUrl) {
    Write-Host "Unknown git type: $($link.type)"
    exit 1
}

Write-Host "Repo: $cloneUrl"
$cloneDir = Join-Path (Split-Path -Parent $PSScriptRoot) "vercel-project-clone"
if (Test-Path $cloneDir) { Remove-Item -Recurse -Force $cloneDir }
git clone $cloneUrl $cloneDir
if ($LASTEXITCODE -eq 0) { Write-Host "Done: $cloneDir" } else { exit 1 }
