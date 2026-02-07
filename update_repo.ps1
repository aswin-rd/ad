
# update_repo.ps1
Write-Host "Staging all changes..."
git add .
if ($LASTEXITCODE -ne 0) { Write-Error "Git add failed"; exit 1 }

Write-Host "Committing changes..."
git commit -m "feat: e xpand content for AdSense approval (articles, about, legal pages)"
if ($LASTEXITCODE -ne 0) { Write-Warning "Git commit failed or nothing to commit"; }

Write-Host "Pushing to remote..."
git push
if ($LASTEXITCODE -ne 0) { Write-Error "Git push failed"; exit 1 }

Write-Host "Repository updated successfully!"
