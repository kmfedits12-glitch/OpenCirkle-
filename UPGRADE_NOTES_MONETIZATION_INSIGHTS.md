# OpenCirkle Monetization & View Insights update

## Included
- Added a Total View Insights section to profile pages, summing the current profile's loaded post `viewsCount` values and listing per-post views.
- Added the 1,000 followers + 1,000 post views eligibility gate for a monetization application.
- Added application fields for document type/number, bKash/Nagad payout number and consent acknowledgements.
- Added editable monetization Terms & Conditions stored in Firestore `appConfig/monetization`.
- Added admin-facing pending application review UI and Firestore rules for the new collections.

## Important production requirements not completed by a frontend-only change
- The consent checkbox is not a real face scan. A secure biometric/liveness verification provider and its consent/privacy flow must be integrated before claiming face verification is performed.
- This code does not collect or store an ID document image. Firebase Storage is disabled in this project; do not store identity images as raw base64 in Firestore. Integrate a secure document verification provider or approved private storage workflow.
- Applications are not automatically approved after 24 hours. The `reviewAfter` timestamp is a review target only; a trusted Cloud Function/scheduled backend must enforce any automatic transition. Automatically enabling monetization without successful identity review is unsafe.
- Per-post earnings, payout calculations and personal direct messages require a defined earnings rate/ledger and a trusted backend. No rate was invented in this update.
- Review and deploy `firestore.rules` carefully in the Firebase console. Existing rules may need project-specific hardening and tests before production deployment.
