@echo off
setlocal

set /p COMMIT_MSG="Commit message: "
set BRANCH_NAME="gh-pages"

cd /d dist
git init
echo Initialized Git repo
git remote add origin https://github.com/coopersheldon/havc
echo Added Github repo as remote (https://github.com/coopersheldon/havc)
git add .
git commit -m "%COMMIT_MSG%"
git checkout -b "%BRANCH_NAME%"
git push origin "%BRANCH_NAME%" -f
echo /\/\Success/\/\
endlocal