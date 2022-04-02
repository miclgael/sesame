#!/bin/sh

do_message () {
  BGreen='\033[1;32m'
  echo -e "${BGreen} $1" 
  echo ""
}

echo ""
do_message "📦 Packaging for release!"

zip -r -FS sesame.zip * -x "*/\.DS_Store" -x "*.git*" -x "*.md*" -x "*.gif*" "assets/tabs-idea.png" -x "bin/package-for-release.sh"

echo ""
do_message "> Package ready: sesame.zip"
