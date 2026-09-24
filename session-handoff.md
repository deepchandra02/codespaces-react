# Session Handoff

## Project

Seed Inventory MVP in Vite + React.

## Product Decisions

- Google sign-in through Firebase Authentication.
- Private per-user inventories in Cloud Firestore.
- Firebase Hosting deployment.
- Quantity is a number plus a plain unit label with no conversion.
- JSON import is additive only.
- Archive and permanent delete are both supported.
- No photos, sharing, or garden-planning features in the MVP.

## Restart Checklist

1. Read `AGENTS.md`, `progress.md`, and `feature_list.json`.
2. Confirm the active feature in `progress.md`.
3. Run `npm test -- --run` and `npm run build` before changing behavior.
4. Work only on the active feature and its acceptance criteria.
5. Record verification evidence in `progress.md`.

## Current Handoff

The project is connected to GitHub, and the source of truth is `feature_list.json`.
Issue #1 is complete on branch `feature/firebase-foundation`. The Firebase SDK, environment template, singleton client initialization, tests, setup documentation, Firebase services, and Hosting deployment are implemented.

## Last Updated

2026-09-24

## Current Objective

Implement Google authentication and session gating.

## Blockers

The Web app is registered, Firestore is provisioned, Authentication is enabled, and Hosting is deployed. The Google provider was configured externally and needs end-to-end app verification.

## Files

`AGENTS.md`, `feature_list.json`, `progress.md`, `init.sh`, `session-handoff.md`, `.env.example`, `.firebaserc`, `firebase.json`, `src/lib/firebase.js`, `src/index.jsx`, `src/App.test.jsx`, `README.md`, `package.json`, `package-lock.json`

## Next Session

Read `AGENTS.md`, `progress.md`, and `feature_list.json`, then begin issue #2: implement Google sign-in/sign-out and session persistence using the existing Firebase client.

## Recommended Next Step

Hosting is deployed at https://seed-inventory-reboot.web.app using `firebase.json` and `.firebaserc`. Next, implement and test Google sign-in locally and in production; full deployment acceptance remains pending until sign-in and Firestore writes work in production.