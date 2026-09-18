# Gemini AI Studio editing notes

When editing this repository in AI Studio:

1. Use the repository root as the working directory.
2. Keep `GEMINI_API_KEY` in AI Studio Secrets; never hard-code it.
3. Preserve the `/api/*` server routes when changing the React UI.
4. Run `npm run lint`, `npm test`, and `npm run build` before publishing.
5. Keep Firebase rules least-privilege and require authenticated user ownership for private data.
6. Treat `firebase-applet-config.json` as browser configuration, not authorization. Security is enforced by Firebase Auth and Firestore Rules.
