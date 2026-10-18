# OpenCirkle V17 change notes

Changes applied on top of the supplied V16 source:
- Post composer now has Public/Private selection.
- Post composer has a Schedule Post control and stores a future `scheduledAt` timestamp. Future posts are hidden from the feed until their selected time; clients must refresh/reload to see them after that time. This is client-side scheduling, not a guaranteed server-side scheduler.
- Feed filters out private posts belonging to other authors and future-dated posts; refresh button still triggers a fresh Firestore query.
- Story bubbles are grouped to one bubble per author (newest story shown), preventing duplicate profile bubbles when the same author has multiple active stories.
- Story timestamp parsing handles Firestore Timestamp values rather than replacing them with the current time.

Validation: ZIP structure checked. Build/typecheck could not run because dependencies (including Vite) are not installed in this environment. Admin-controlled error-page module and a full profile redesign are not included in this revision; they require additional integration and runtime validation.
