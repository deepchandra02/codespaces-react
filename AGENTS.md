# Seed Inventory MVP

## Startup Workflow

1. Read `progress.md` and `feature_list.json` before writing code.
2. Work on one feature at a time, in dependency order.
3. Inspect the existing Vite/React implementation before introducing abstractions.

## Product Scope

Build a private, multi-user seed inventory app with Google sign-in, Firestore sync, and Firebase Hosting.

- Each user can access only their own inventory.
- Seed records contain variety, crop, quantity, unit, location, viability date, and notes.
- Quantities are a plain number plus a user-entered unit label; do not implement conversions.
- Users can add, edit, adjust, archive, permanently delete, search, filter, and sort records.
- The dashboard shows inventory totals and viability attention items.
- JSON import adds records to the existing inventory; it never replaces existing data.
- Do not add photos, sharing, planting calendars, barcode scanning, notifications, or prediction features.

## Technical Boundaries

- Use the existing Vite + React application.
- Use Firebase Authentication with Google provider.
- Use Cloud Firestore at `users/{userId}/seeds/{seedId}`.
- Enforce user isolation with Firestore Security Rules, not only client-side filtering.
- Use Firebase Hosting for deployment.
- Keep Firebase configuration in environment variables and do not commit secrets.

## Definition Of Done

- The relevant feature acceptance criteria in `feature_list.json` are met.
- Focused tests are added or updated where behavior is testable.
- `npm test -- --run` passes.
- `npm run build` passes.
- Security-sensitive changes include a rules test or documented verification.
- Update `progress.md` with evidence before marking a feature complete.

## Working Rules

- Keep changes modular and scoped to one feature.
- Do not start the next feature while the current feature lacks verification evidence.
- Do not claim deployment success without testing the production URL.
- Never commit Firebase credentials or service-account files.

## Verification Commands

- Run `./init.sh` for the clean restartable baseline.
- Run `npm test -- --run` for focused test verification.
- Run `npm run build` for the production build check.

## End of Session

Before ending a session, update `progress.md` with the current objective, changed files, blockers, verification evidence, and recommended next step. Keep the work restartable and clean for the next session.