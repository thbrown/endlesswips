#! /bin/sh
echo "Deleting old files"
rm -r ../endlesswips/*
echo "Copying files from 'endlesswips-private' to 'endlesswips'"
cp -r ./public/* ../endlesswips/
echo "Committing changes"
cd ../endlesswips
echo "endlesswips.com" >> CNAME
git add -A
git commit -m "Update page"
git push
