# Netlify Deploy (OpenCirkle)

এই ZIP-টি source project; Netlify Drop-এ source ZIP সরাসরি upload করলে app চলবে না।

## Git/Netlify build deploy
1. ZIP extract করুন; `package.json`, `vite.config.ts`, `src/`, `index.html` একই root folder-এ থাকবে।
2. এই folder GitHub repository-তে push করুন অথবা Netlify-তে repository connect করুন।
3. Netlify Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `22` (netlify.toml-এ সেট করা)
4. Deploy করুন। `netlify.toml` ও `public/_redirects` SPA route fallback configure করে।

## Local check
- Node.js 22 install করুন.
- Run `npm install`
- Run `npm run build`
- Deploy `dist/` folder with Netlify Drop.

## Monetag
Admin panel-এ Monetag ad code save করার জন্য Firebase Auth/Firestore rules এবং app-এর `MonetagAdSlot` access ঠিক থাকতে হবে। শুধু Netlify deploy config ads account approval বা valid Monetag code নিশ্চিত করে না.
