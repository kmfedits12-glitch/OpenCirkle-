# OpenCirkle v26 — Global Service Mode

## Added
- Admin `Platform Parameters` now includes a Global App Lock / Service Screen module.
- Modes: Normal App (unlock), Maintenance Mode, 404 Page Not Found, and 503 Try Again Later.
- Admin can customize the message shown to users.
- The main app listens to `platformSettings/global` in Firestore in real time, so mode changes propagate without a redeploy or manual refresh.
- Non-admin users are shown only the selected service screen while a lock mode is active. Admin/Super Admin users bypass the lock so they can access the control panel and turn the mode off.
- Legacy `maintenanceMode` is respected for existing Firestore settings documents that do not yet have `serviceMode`.

## Firebase note
The app reads/writes `platformSettings/global`. Confirm your Firestore Security Rules permit authenticated authorized admins to update platform settings and permit clients to read the service-mode fields. UI checks alone are not a security boundary; sensitive operations must also be protected by Firestore rules/server authorization.

## Validation
- ZIP archive integrity checked after packaging.
- Static source/import checks only. Full Vite build and live Firebase end-to-end test were not run because dependencies are not installed in this environment.
