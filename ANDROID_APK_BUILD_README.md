# INFBOTT Android APK Builder (phone-friendly setup)

This project includes a GitHub Actions workflow that builds a **debug APK** online. It does not contain a prebuilt APK yet.

## Before building

1. Upload the contents of this ZIP into a new GitHub repository (the files must be at the repository root, including `package.json` and `capacitor.config.ts`).
2. Your app's chat service uses a backend endpoint. For the APK, configure the deployed HTTPS backend base URL as a GitHub repository variable named `VITE_API_BASE_URL` (Settings → Secrets and variables → Actions → Variables). Use the origin hosting the working `/api/chat` endpoint, without a trailing slash. If the endpoint is hosted on Netlify, use that deployed site's HTTPS origin.
3. In the repository, open Actions → **Build INFBOTT Android APK** → Run workflow. If Actions are disabled, enable them first.
4. When the workflow completes successfully, open that workflow run, scroll to Artifacts, and download `INFBOTT-Android-APK`. Extract it on your phone and install `app-debug.apk`. Android may ask you to allow installation from that source. Only install APKs you built or trust.

## Important

- This workflow builds a **debug APK** for personal testing. It is not a Play Store release/signing setup.
- The APK needs a reachable HTTPS backend for AI chat. An empty or incorrect `VITE_API_BASE_URL` can make chat fail even if the app opens.
- Firebase web configuration is included in the source; Firebase security must be enforced with proper Authentication settings and Firestore/Storage rules. Never commit private server/API secrets to the repository.
- The workflow may fail if the app has compile errors or if its external services/configuration are incomplete. Check the Actions log for the exact error.
