changes=$(git update-index --refresh | wc -l)
echo "Uncommitted changes: $changes"
if [ $changes -ge 1 ]; then
    echo "Uncommitted changes exists."
    git config --local user.email "github-actions@users.noreply.github.com"
    git config --local user.name "github-actions"
    git commit -m "Add changes" -a 
fi