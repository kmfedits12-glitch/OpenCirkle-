# OpenCirkle Creator Wallet & Cash-out Upgrade

## Included
- Creator Monetize section now subscribes to `creatorWallets/{uid}` and displays the live available balance.
- Approved creators can select bKash or Nagad, enter a receiving number, and submit a cash-out request for their available balance.
- Cash-out requests are stored in `cashoutRequests` with `pending` status and a 24–48 hour processing target.
- React Admin Control Center and standalone Admin HTML show the cash-out queue.
- Admin can add a manually verified earnings credit to an approved creator's wallet.
- Admin's `Pay All / Mark Paid` action requires confirmation, atomically deducts the requested balance, marks the request paid, and sends an in-app notification.
- Firestore rules restrict wallet balance writes to admins and cash-out handling to admins; owners can read their own wallet and requests.

## Important payment limitation
The current project does **not** have an authorized bKash/Nagad disbursement API integration or merchant credentials. The admin must send the payout through the official bKash/Nagad account first, then click `Pay All / Mark Paid` to record the transfer. The button cannot move real money by itself. Automated transfers require an approved provider disbursement API and a trusted backend/Cloud Function; never put API secrets in client-side HTML.

## Earnings limitation
This adds wallet ledger UI and admin verified credits, not trusted automatic per-view earnings calculation. Automatic earnings require server-validated view events and a backend ledger to prevent client-side view/balance manipulation.

## Deploy
Deploy the updated `firestore.rules` to Firebase before testing. Install dependencies and run `npm run build` in the project before deploying the app. Full app build could not be confirmed in this environment because the project dependencies are not installed here. The standalone admin HTML JavaScript syntax check passed.
