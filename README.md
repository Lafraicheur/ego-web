# e-Go — Landing Page

Application de taxi intelligente à Abidjan. Plateforme mettant en relation conducteurs et clients.

## Démarrer le projet

```bash
npm run next:dev
```

## Stack
- Next.js 14, TypeScript, Tailwind CSS
- GSAP 3 + ScrollTrigger
- React Three Fiber (modèle 3D voiture)
- Zustand

## Structure
- `src/data/content.ts` — tout le contenu texte
- `src/slices/` — sections de la page (Hero, Features, BigText, HowItWorks, Download)
- `src/components/` — composants partagés
- `public/car/scene.gltf` — modèle 3D du véhicule
- `public/logo.png` — logo e-Go
