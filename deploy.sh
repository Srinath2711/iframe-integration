# Step 1: Build the Vite project
echo > .nojekyll

# Step 2: Clone the repository to the deploy directory
git init
git checkout -B main
git add -A
git commit -m "deploy"


cd -
