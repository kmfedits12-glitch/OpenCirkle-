# OpenCirkle Bug Audit & Fix v24

- Fixed a privacy leak in Firestore rules: private posts are now readable only by their author or moderators/admins.
- Updated feed, hashtag, search, and public-profile post queries to explicitly request public posts so they remain compatible with the stricter Firestore rules.
- The signed-in author can still query their own posts, including private posts.
- Updated the starter-post emptiness check to look at public posts, so private posts do not falsely make the public feed appear populated.
- Static relative-import audit: no missing relative imports found.

Build note: dependency installation timed out in this environment, so `npm test`, TypeScript lint, and Vite production build could not be executed here. Deploy Firestore rules with the app and test public/private post visibility after deployment.
