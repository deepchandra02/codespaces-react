# Seed Inventory MVP

Private seed inventory application built with [Vite](https://vitejs.dev/), React, and Firebase.

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts the Vite development server at [http://localhost:3000/](http://localhost:3000/).

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the Vitest test runner.

### `npm run build`

Builds the app for production to the `dist` folder.

## Firebase setup

Create or select a Firebase project, register a Web app, and enable Cloud Firestore and Firebase Authentication. The Google provider and sign-in flow are configured in the authentication feature.

Copy `.env.example` to `.env.local` and replace each placeholder with the Web app configuration from the Firebase console:

```text
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

Local files such as `.env.local` are ignored by Git. Production builds must receive their own `VITE_FIREBASE_*` values through the deployment environment; do not commit environment files. Firebase Web configuration is included in the browser bundle by design, while authentication and Firestore security rules enforce access control.

The Firebase client is initialized from `src/lib/firebase.js` and reuses the existing app during React Strict Mode or Vite HMR.

## Firebase Hosting

The Hosting configuration is in `firebase.json` and publishes the Vite `dist` directory with a single-page-app fallback. Deploy with:

```bash
npm run build
firebase deploy --only hosting --project seed-inventory-reboot
```

Production URL: https://seed-inventory-reboot.web.app

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn Vitest, a Vite-native testing framework, go to [Vitest documentation](https://vitest.dev/guide/)

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://sambitsahoo.com/blog/vite-code-splitting-that-works.html](https://sambitsahoo.com/blog/vite-code-splitting-that-works.html)

### Analyzing the Bundle Size

This section has moved here: [https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer)

### Making a Progressive Web App

This section has moved here: [https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf](https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf)

### Advanced Configuration

This section has moved here: [https://vitejs.dev/guide/build.html#advanced-base-options](https://vitejs.dev/guide/build.html#advanced-base-options)

### Deployment

This section has moved here: [https://vitejs.dev/guide/build.html](https://vitejs.dev/guide/build.html)

### Troubleshooting

This section has moved here: [https://vitejs.dev/guide/troubleshooting.html](https://vitejs.dev/guide/troubleshooting.html)
