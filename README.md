# Globalact — site vitrine

## Fichiers livrés
- `index.html` — la page (à déployer)
- `styles.css` — CSS Tailwind compilé + minifié (à déployer)
- `tailwind.config.js` / `src.css` / `build.sh` — outils de build (PAS à déployer)
- `package.json` — dépendance de dev (Tailwind)

## Régénérer le CSS après modification du HTML
Indispensable : Tailwind ne garde que les classes présentes dans `index.html`.
Si vous ajoutez une classe non encore utilisée, relancez le build, sinon elle n'aura aucun effet.

```bash
npm install      # une seule fois
npx tailwindcss -i src.css -o styles.css --minify       # régénère styles.css
``

