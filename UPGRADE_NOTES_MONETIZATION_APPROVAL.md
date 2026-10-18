# Monetization Approval Workflow Update

- Added a Monetization tab to the React Super Admin Control Center. It subscribes to the existing `monetizationRequests` Firestore collection and lets authorized admins approve/reject pending requests.
- Approving/rejecting updates the request status, updates the user's monetization status, and creates a personal in-app notification in the existing `notifications` collection.
- Added the same approval/rejection queue to the standalone Super Admin HTML panel.
- Extended the app notification type/rendering so the creator sees the full Bengali approval/rejection message.
- The creator Monetize section now listens live for application status and reads eligibility thresholds, enable/disable setting, and Terms & Conditions from `platformSettings/global`, matching the admin HTML settings.
- Existing Firebase project/configuration and Firestore collections are reused; no demo users or data are added.

Important production limitation:
- This approval workflow does not itself generate real earnings. Trusted view-event validation, server-side earning calculations, and a payout ledger/withdrawal process require a deployed trusted backend (for example Firebase Cloud Functions) and appropriate Firestore rules. A client-side counter or manually set `viewsCount` should not be treated as billing-grade proof of views.
- Identity/face fields in the current application form are user-submitted declarations; this code does not perform a real biometric face scan or upload an ID image. Add a secure verification provider before representing it as verified identity.
