# OpenCirkle UI and notifications upgrade

- Story rings are grouped by author. Each author has one ring; opening it cycles through that author's active stories instead of rendering a separate ring for every story.
- Admin platform announcements are now subscribed to live from Firestore and displayed inside the Notifications screen under “Official Notifications”.
- Added a dedicated bell button to the mobile bottom navigation for signed-in users; it opens the notifications screen and shows the unread activity badge.
- Removed visible navigation text labels for a cleaner icon-first dock while retaining accessible aria labels/tooltips.
- Replaced the old flat pulse highlight with a refined animated crystal border/halo, respecting reduced-motion preferences.

Notes: Build and live Firebase behavior must be verified after installing dependencies and deploying. Admin announcements are read from the existing `announcements` collection, which must remain readable by app users in Firestore rules. Existing Firebase config and app data structures were retained.
