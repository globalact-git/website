#!/usr/bin/env bash
# Régénère styles.css à partir des classes réellement utilisées dans index.html
# Prérequis (une seule fois) : npm install
# Usage : ./build.sh         (build unique, minifié)
#         ./build.sh --watch (recompile à chaque modification)

set -e

if [ "$1" == "--watch" ]; then
  npx tailwindcss -i src.css -o styles.css --watch
else
  npx tailwindcss -i src.css -o styles.css --minify
  echo "✓ styles.css régénéré ($(du -h styles.css | cut -f1))"
fi
