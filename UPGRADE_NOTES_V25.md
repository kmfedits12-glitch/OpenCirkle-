# OpenCirkle Stability & UX Upgrade v25

- Reduced presence heartbeat writes from every 30 seconds to every 60 seconds.
- Prevented the auth profile listener from replacing React profile state when the only change is `lastActiveAt`. This avoids unnecessary app-wide renders that can look like the app is refreshing while preserving live updates for real profile changes.
- Preserved the Home navigation, post link previews, Firebase integration, and the v24 Firestore privacy/query fixes.
- Static scan: no direct `location.reload()`, `location.assign()`, or `location.replace()` calls were found in the app source. The configurable third-party Monetag script can still cause navigation/refresh behavior depending on the code entered in admin settings; disable that script temporarily to isolate it if the issue persists.

Validation: ZIP integrity and relative-import scan checked. A full Vite build was not run because dependencies are not installed in this environment.
