# Jinix Chacko — Portfolio

Built with React + TypeScript + Vite + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — this is a static site, deployable anywhere (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

## Structure

- `src/components/Navbar.tsx` — fixed nav with mobile hamburger menu
- `src/components/Hero.tsx` — full-screen hero: mouse-parallax photo background, blurred intro line, typewriter effect, pill CTAs
- `src/components/Work.tsx` — PreHab 2.0 case study + other projects
- `src/components/Research.tsx` — publications list
- `src/components/About.tsx` — education, experience, leadership, certifications
- `src/components/Contact.tsx` — contact CTAs + footer
- `src/hooks/useTypewriter.ts` — the typewriter text hook
- `public/profile.png`, `public/Jinix_Chacko_Resume.pdf` — swap these to update your photo/résumé

## Swapping in a real background video

The hero currently uses your photo with a mouse-parallax effect (see `src/components/Hero.tsx`).
If you get a screen recording of PreHab 2.0 or another demo, you can replace the `<img>` background
with a `<video>` element and add the scrub-on-mousemove behavior described in the original spec
(track `currentX` delta, map to `video.currentTime`, clamp between 0 and `video.duration`).
