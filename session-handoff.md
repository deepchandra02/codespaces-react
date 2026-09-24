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
The next implementation feature is issue #1: "Set up Firebase project and app integration".

## Last Updated

2026-09-24

## Current Objective

Configure the Firebase project and connect the Vite app.

## Blockers

Firebase project configuration and environment variables are still pending.

## Files

`AGENTS.md`, `feature_list.json`, `progress.md`, `init.sh`, `session-handoff.md`

## Next Session

Read `AGENTS.md`, confirm issue #1 in `feature_list.json`, run `./init.sh`, then begin Firebase setup.

## Recommended Next Step

Create the Firebase project, enable Authentication, Firestore, and Hosting, and add environment-based config without committing secrets.