# OpenCirkle v22 — Home Tab & Published Link Preview Fix

- Replaced the Feed segmented-tab label `For You` with `Home` and changed its icon to the Home icon. It continues to open the latest/home feed.
- Updated the empty-feed guidance to refer to Home instead of For You.
- Kept the link preview card in the post composer and published post cards. Published posts now pass the stored post text from `content`, `text`, or `body` into the preview component, so links still get previews if older records use an alternate text field.
- Preview cards show available website metadata (publisher/domain, title, description, logo, image, and URL). Metadata availability depends on the destination site's public metadata and preview service availability.
- Updated the actual mobile bottom navigation bar (not only the feed's internal filter tabs): the first navigation button now uses the Home icon and visibly displays the Home label while still routing to the feed.
