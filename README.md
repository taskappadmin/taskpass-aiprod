# Taskpass AI Studio production workspace

This repository is prepared for editing in Google AI Studio.

## AI Studio configuration

- `metadata.json` declares the Taskpass app capabilities and browser permissions.
- `GEMINI_API_KEY` is read only on the server through `.env`/AI Studio Secrets.
- Do not put Gemini keys in client-side React code.
- Firebase web configuration is in `firebase-applet-config.json`; Firestore access is controlled by `firestore.rules`.

## Run

```bash
npm install
npm run dev
```

## Production

```bash
npm run lint
npm test
npm run build
npm start
```

The source of the full application is `rikyam/Taskpass-AiStudio`. This target repository is `taskappadmin/taskpass-aiprod` and is intended to be the editable Gemini AI Studio copy.
