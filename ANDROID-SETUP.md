# INFBOTT Android / PWA setup

## Install as an app without building an APK (PWA)
1. Deploy this project to HTTPS (Netlify is already configured in `netlify.toml`).
2. In Netlify site settings, add the required environment variables, especially `GEMINI_API_KEY` and the Firebase values used by your project. Do not put a private Gemini key in client-side code.
3. Open the deployed HTTPS site in Chrome on Android and use the browser menu → **Install app** (or **Add to Home screen**).

The PWA manifest, icons, and service worker are included. The service worker does not cache API requests or private chat responses. Offline mode only provides a limited cached app shell; AI chat still needs an internet connection and a working backend.

## Build a native Android APK
A signed APK cannot be produced by editing a ZIP alone. Use a computer with Node.js, Android Studio, and an Android SDK. From this folder:

```bash
npm install
```

Deploy the backend first, then create a `.env` file containing the public HTTPS origin of that backend (no trailing slash):

```env
VITE_API_BASE_URL=https://YOUR-DEPLOYED-BACKEND.example
```

Replace the example with your actual backend URL. Then run:

```bash
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

In Android Studio, build an APK using **Build → Build Bundle(s) / APK(s) → Build APK(s)**. To publish or share widely, create a signed APK/AAB.

**Important:** the API backend must be deployed and reachable over HTTPS. The APK does not safely contain your Gemini secret; keep `GEMINI_API_KEY` on the server. Google sign-in, Firebase authorized domains, and any OAuth redirect URLs may need platform-specific configuration before they work in a native APK.
