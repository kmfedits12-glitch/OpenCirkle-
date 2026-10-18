# OpenCirkle — Crystal Crypt Blue Social Network

**OpenCirkle** is a production-grade, text-only social media web application engineered with a futuristic **Crystal Crypt Blue** visual identity. Built on Firebase Authentication and Cloud Firestore, it guarantees high intellectual signal with zero media bloat.

---

## 1. Core Architectural Guarantees

- **Text-only social content**: Photo/video/audio uploads are prohibited for posts and stories. The separate identity-verification flow accepts only ID-document photos for manual verification review.
- **No Firebase Storage**: Firebase Storage is never imported or initialized. ID-document photos are compressed in the browser and stored in restricted `verification_requests` Firestore documents, subject to Firestore document-size limits and strict access rules.
- **Crystalline Geometric Emblems**: Avatars and badges use procedural SVG crystal facets (gem, prism, hexagon, star, orb, sparkle, shield, diamond) paired with user initials and radiant aura themes.
- **Real-Time Data Layer**: Built on Google Cloud Firestore with real-time listeners for notifications, messages, and feed updates.
- **Role-Based Access Control**: Strict least-privilege roles (`user`, `moderator`, `admin`, `superadmin`).

---

## 2. Crystal Crypt Blue Design System

| Element | Hex Color | Role |
| :--- | :--- | :--- |
| Midnight Background | `#050A18` | 60% dominant canvas field |
| Deep Sapphire | `#071A38` | 30% structural surfaces and glass card base |
| Crystal Blue | `#0D47A1` | Primary gradients and elevation accents |
| Electric Blue | `#168BFF` | 10% active intent highlights, glows, and interactive states |
| Ice Blue | `#8DDCFF` | Crystalline luminescence, verification checks, and text kickers |
| Crystal White | `#F1F8FF` | Primary prose and high-contrast typography |
| Muted Text | `#A8BCD7` | Secondary metadata and timestamp annotations |

---

## 3. Firestore Collection Schema

### `users/{userId}`
```typescript
interface UserProfile {
  uid: string;
  email: string;
  username: string;              // Unique lowercase identifier
  displayName: string;
  bio: string;                   // Text biography (max 300 chars)
  joinedAt: number;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  likesCount: number;
  verified: boolean;             // Managed strictly by admins
  isPrivate: boolean;            // Requires approval for followers
  role: 'user' | 'moderator' | 'admin' | 'superadmin';
  status: 'active' | 'suspended' | 'banned';
  pinnedPostId?: string | null;
  avatarSymbol: 'gem' | 'prism' | 'hexagon' | 'star' | 'orb' | 'sparkle' | 'shield' | 'diamond';
  avatarColor: 'electric' | 'ice' | 'sapphire' | 'cyan' | 'neon';
  blockedUsers?: string[];
  mutedWords?: string[];
}
```

### `usernames/{username}`
- Documents mapping unique lower-cased usernames to `uid` to prevent duplication race conditions.

### `posts/{postId}`
```typescript
interface Post {
  id: string;
  authorId: string;
  authorUsername: string;
  authorDisplayName: string;
  authorVerified: boolean;
  authorAvatarSymbol: string;
  authorAvatarColor: string;
  content: string;               // Sanitized text-only (max 5,000 chars)
  tags: string[];                // Extracted #hashtags
  mentions: string[];            // Extracted @mentions
  createdAt: number;
  editedAt?: number | null;
  likesCount: number;
  commentsCount: number;
  repostsCount: number;
  bookmarksCount: number;
  isPinned?: boolean;
  isRepost?: boolean;
  repostOf?: { id, authorUsername, authorDisplayName, content, createdAt } | null;
}
```

### `comments/{commentId}`
- Post ID, Author data, text content (max 1,000 chars), creation timestamp.

### `likes/{uid_postId}` & `bookmarks/{uid_postId}`
- Atomic relationship records with composite keys preventing duplicate interactions.

### `follows/{followerId_followingId}`
- Directed social graph edges with follower and following counters.

### `followRequests/{requesterId_targetId}`
- Pending access requests for private accounts with accept/decline workflows.

### `conversations/{conversationId}` & `messages/{messageId}`
- 1-to-1 direct messaging threads. Participant authorization check prevents unauthorized reads.

### `reports/{reportId}`
- Moderation queue for user, post, and comment complaints.

### `adminAuditLogs/{logId}`
- Immutable audit log of administrative actions, bans, role escalations, and settings adjustments.

### `platformSettings/global`
- Global platform configuration (post character limits, registration toggles, maintenance mode).

---

## Identity Verification Flow

The profile page offers **Get Your Profile Verified (৳120)**. Applicants select NID, Passport, or Driving License, enter the document number, attach front/back images, choose bKash or Nagad, and submit a transaction ID for manual review. Both payment methods show `01916293234`. Requests are written to `verification_requests`; admins can inspect the images and approve/reject them from Admin Control Center → ID Verification. The badge is activated only after an admin approves the request. A submitted TRX ID is not automatic payment confirmation.

**Important security note:** Firebase Storage is disabled by project requirement, so compressed ID images and document numbers are stored in Firestore. The added rules restrict request reads to the applicant and admin/super-admin and limit image fields. Review your deployed rules and privacy obligations before collecting real identity documents; never use public/open Firestore rules for this collection.

## 4. Firestore Security Rules & Deployment

Deploy rules and indexes using Firebase CLI:
```bash
firebase deploy --only firestore:rules,firestore:indexes
```

Security rules enforce:
1. `isOwner()` authorization on profile mutations, prohibiting self-elevation of `role`, `verified`, or `status`.
2. Input length limits ($\le 5000$ chars on posts, $\le 1000$ on comments).
3. Participant-only access to private messages (`conversations/{id}/messages/{msgId}`).
4. Moderator/Admin-only read and write permissions on `reports` and `adminAuditLogs`.

---

## 5. Automated Testing & Verification

Run the automated test suite verifying text-only constraints, sanitization, absence of Firebase Storage, and role hierarchies:
```bash
npm test
```
Result:
```
--- Running OpenCirkle Text-Only Architecture & Security Verification ---
✅ PASS: 1. Strictly no firebase/storage imported
✅ PASS: 2. Strictly no getStorage initialized
✅ PASS: 3. No type="file" upload controls
✅ PASS: 4. No image pickers
✅ PASS: 5. No video pickers
✅ PASS: 6. Empty text post throws error
✅ PASS: 7. Strips HTML tags
✅ PASS: 8. Exceeding 5,000 characters throws error
✅ PASS: 9. Extracts hashtags
✅ PASS: 10. Extracts mentions

Results: 10 passed, 0 failed.
```

---

## 6. Super Admin Account

Users registering with or possessing the email `rabiafroj43@gmail.com` are automatically granted `superadmin` privileges, giving immediate access to the **Admin Control Center** for user moderation, role assignments, report resolutions, and platform broadcasts.
