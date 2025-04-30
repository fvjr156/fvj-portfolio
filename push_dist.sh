#!/bin/sh

echo ""
echo "██████╗░██╗░░░██╗░██████╗██╗░░██╗░░░░░░░░██████╗░██╗░██████╗████████╗░░░░██████╗██╗░░██╗"
echo "██╔══██╗██║░░░██║██╔════╝██║░░██║░░░░░░░░██╔══██╗██║██╔════╝╚══██╔══╝░░░██╔════╝██║░░██║"
echo "██████╔╝██║░░░██║╚█████╗░███████║░░░░░░░░██║░░██║██║╚█████╗░░░░██║░░░░░░╚█████╗░███████║"
echo "██╔═══╝░██║░░░██║░╚═══██╗██╔══██║░░░░░░░░██║░░██║██║░╚═══██╗░░░██║░░░░░░░╚═══██╗██╔══██║"
echo "██║░░░░░╚██████╔╝██████╔╝██║░░██║███████╗██████╔╝██║██████╔╝░░░██║░░░██╗██████╔╝██║░░██║"
echo "╚═╝░░░░░░╚═════╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚═════╝░╚═╝╚═════╝░░░░╚═╝░░░╚═╝╚═════╝░╚═╝░░╚═╝"
echo ""

REPO_URL="https://github.com/fvjr156/fvj-portfolio"
BRANCH_NAME="gh-pages"

while [ "$#" -gt 0 ]; do
  case $1 in
    --repo) REPO_URL="$2"; shift 2 ;;
    --branch) BRANCH_NAME="$2"; shift 2 ;;
    *) echo "Unknown parameter: $1"; exit 1 ;;
  esac
done

read -p "# Commit message: " COMMIT_MSG

cd dist || exit

git init
echo "# Initialized Git repo"

git remote add origin "$REPO_URL"
echo "# Added GitHub repo as remote ($REPO_URL)"

git add .
git commit -m "$COMMIT_MSG"

git checkout -b "$BRANCH_NAME"

git push origin "$BRANCH_NAME" -f

echo "# Success"
