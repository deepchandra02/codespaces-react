# GitHub Issue Drafts

These feature-sized issue drafts reflect the approved MVP scope. Publish them after a GitHub remote is configured.

## 1. Set up Firebase project and app integration

Configure Firebase Authentication, Cloud Firestore, and Firebase Hosting for the Vite app. Add environment-based client configuration without committing secrets.

Acceptance criteria:

- Firebase services are enabled and documented.
- The app initializes Firebase locally.
- Local and production configuration are distinct.

## 2. Add Google authentication

Add Google sign-in and sign-out, session persistence, loading states, and protected inventory content.

Acceptance criteria:

- Users can sign in and sign out with Google.
- Signed-out users cannot access inventory content.
- Refreshing preserves the session.

## 3. Build seed inventory CRUD

Implement create, read, update, archive, and confirmed permanent delete for records containing variety, crop, quantity, unit, location, viability date, and notes.

Acceptance criteria:

- Records persist under the signed-in user's Firestore path.
- Forms validate required fields and non-negative quantities.
- Archived records are excluded from the default list.

## 4. Add quantity adjustment controls

Allow quick quantity increases and decreases without requiring the full edit form.

Acceptance criteria:

- Quantity cannot become negative.
- Zero quantity is visibly treated as empty.
- Updates persist to Firestore.

## 5. Add inventory search, filters, and sorting

Add search across variety, crop, location, and notes, plus filters and sorting for the inventory view.

Acceptance criteria:

- Search and filters can be combined.
- Users can filter availability, crop, location, and archived state.
- Users can sort by name, quantity, and viability date.

## 6. Build inventory dashboard

Show inventory totals, empty records, and viability attention items with links into filtered inventory results.

Acceptance criteria:

- Archived records are excluded from normal counts.
- Empty, soon-to-expire, and expired states are represented.
- Empty inventory has a useful state.

## 7. Add additive JSON import and export

Export the signed-in user's inventory and import valid JSON by adding records to the existing inventory. Import must never replace existing data.

Acceptance criteria:

- Export produces valid JSON.
- Import validates the complete file before writing.
- The user previews the record count and confirms the import.

## 8. Add Firestore security rules and error states

Enforce per-user access in Firestore Security Rules and handle loading, permission, write, and offline failures in the UI.

Acceptance criteria:

- Cross-user reads and writes are rejected.
- Errors are actionable and do not expose internal details.
- Security verification evidence is recorded.

## 9. Deploy MVP with Firebase Hosting

Configure production builds, SPA fallback routing, and Firebase Hosting deployment.

Acceptance criteria:

- The production URL loads and route refreshes work.
- Google sign-in and Firestore writes work in production.
- Deployment steps are documented.