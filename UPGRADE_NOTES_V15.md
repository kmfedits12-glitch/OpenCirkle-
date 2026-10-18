# OpenCirkle v15 upgrade notes

This update is based on the supplied v14 project and preserves the existing Crystal Crypt Blue UI, Firebase Auth/Firestore architecture, text-only post/story model, main logo, and exact `Dots` loading component.

## Changes
- Added a small network status banner for offline/reconnected states without blocking the app.
- Added a keyboard-accessible “Skip to main content” link and a focus target for the main view.
- Improved story feed resilience with a visible Firestore-load error message.
- Story cards now refresh their expiry filtering periodically and respect each story's `expiresAt` timestamp, falling back to `createdAt + 24 hours` for older documents.
- Removed hard-coded sample story cards from the story strip so the feed reflects actual Firestore stories instead of demo content.

## Notes
- This project still uses text-only stories and does not use Firebase Storage. Photo/video story sharing with reliable cross-user viewing requires a shared media transport/storage solution; this update does not pretend to add that unsupported capability.
- Build and automated tests could not be run in this environment because npm dependencies were unavailable for installation. Please run `npm install`, `npm run lint`, `npm test`, and `npm run build` before deployment.
