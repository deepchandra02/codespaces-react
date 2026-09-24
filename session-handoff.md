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

The harness is created. The next implementation feature is `firebase-foundation`.
The repository has no GitHub remote, so feature issues are prepared conceptually but have not been published.

## Last Updated

2026-09-24

## Current Objective

Configure the Firebase project and connect the Vite app.

## Blockers

GitHub remote and Firebase project are not configured.

## Files

`AGENTS.md`, `feature_list.json`, `progress.md`, `init.sh`, `session-handoff.md`, `ISSUES.md`

## Next Session

Read `AGENTS.md`, run `./init.sh`, then begin the `firebase-foundation` feature.

## Recommended Next Step

Create or connect the GitHub repository before publishing the drafts in `ISSUES.md`.