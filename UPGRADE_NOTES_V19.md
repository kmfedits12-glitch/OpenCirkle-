# OpenCirkle V19 — Profile Verification System

## Added
- Profile CTA: `✦ Get Your Profile Verified (৳120)` for the signed-in user's own unverified profile.
- Identity form supports NID, Passport, and Driving License; document number; front and back images.
- Browser-side JPEG compression (per-image limit approximately 220 KB) before writing the request to Firestore. Firebase Storage remains disabled.
- bKash and Nagad payment instructions both display `01916293234` and fixed amount ৳120.
- TRX ID submission creates a `verification_requests` document with pending status; submission does not auto-activate the badge.
- Admin Control Center → ID Verification panel lists requests, shows submitted document images and transaction data, and provides approve/reject actions.
- Admin approval updates the user's `verified` field. Firestore rules now restrict request reads to the applicant and Admin/Super Admin, and updates to Admin/Super Admin.

## Important limitations / deployment checks
- Payment is **manually reviewed**. The client cannot verify a bKash/Nagad transfer automatically; Admin must confirm the transaction before approval.
- Since Firebase Storage is disabled by requirement, ID images and ID number are stored in Firestore. The UI compresses images to stay within document limits. Deploy/review the included `firestore.rules` before use and do not use permissive public rules.
- Build/runtime checks were not completed because project dependencies (`node_modules`, including Vite/React/Firebase packages) are not installed in this environment. The ZIP was checked for archive integrity only.
