# OpenCirkle V18 — targeted fixes

Changes made on top of the supplied V17 project:
- Story feed now keeps every unexpired story document instead of collapsing each author to only their newest story.
- Profile navigation updates the app's selected user directly and writes the deep link with `history.replaceState`, avoiding a duplicate hash-change navigation. Direct profile hashes are URL-decoded.
- Post sharing uses Web Share when available, then clipboard, then a copy-link prompt fallback for browsers where clipboard APIs are unavailable.
- Profile sharing uses Web Share when available and has clipboard/prompt fallbacks.

Validation:
- ZIP archive integrity checked after packaging.
- `npm run build` could not be run because dependencies are not installed in this environment (`vite: not found`).

Not implemented in this patch:
- Identity document upload and verification/payment flow. The existing Firebase client explicitly initializes Auth + Firestore only and states Firebase Storage is prohibited. Persisting NID/passport/driver-license photos securely requires a dedicated protected upload destination and access rules. Also, the real bKash/Nagad receiver number is not present in the project, so a working manual payment instruction cannot be configured without inventing payment details.
