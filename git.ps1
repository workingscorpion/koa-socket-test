$today = Get-Date -Format "yyyy/MM/dd HH:mm"
git add .
git commit -m "$today"
git push