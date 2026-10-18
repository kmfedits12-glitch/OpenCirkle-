# OpenCirkle V21 — Post Views + Monetag Admin Configuration

## Post views
- Added `viewsCount` to the Post type, Firestore mapping, and newly created posts.
- Post cards display an eye icon and view total.
- A view is counted once per browser session per post using sessionStorage.
- `firestore.rules` allows `viewsCount` in the existing authenticated public-counter update field list. Review this before production: client-side counter writes can be abused; a trusted Cloud Function/server is recommended for authoritative analytics.

## Monetag
- Admin > Platform Parameters now includes Enable Monetag, Zone/Publisher ID, and HTTPS Script URL.
- Settings are saved in `platformSettings/global` through the existing admin settings save flow.
- A sponsored slot appears in the feed after the fifth post when enabled and configured.
- Only an HTTPS script URL is loaded. Use the exact code/script URL supplied in your Monetag publisher dashboard; no publisher ID was provided in this change, so ads remain disabled by default.
- This is configurable script loading, not proof of a completed Monetag account approval or live ad delivery. Test using Monetag's own publisher instructions and policy.

## Deployment
- Deploy updated app source and review/deploy `firestore.rules` to the same Firebase project.
- Ensure only authorized admins can update `platformSettings/global` in Firestore Rules.
- Build and test in your deployment environment; package build could not be verified in this run.
