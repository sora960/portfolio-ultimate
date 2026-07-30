<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UI Preservation and Surgical Edit Policy

**The existing UI design is canonical.**

When modifying an existing interface:
1. Assume all current visual design decisions are intentional unless the user explicitly requests a redesign.
2. Make the smallest possible change that satisfies the request.
3. Default mode is **MODE: TWEAK** (surgical edits only, max 1 file/component/property). Do not enter **MODE: DESIGN** (redesign/refactor) unless explicitly instructed.
4. Do NOT refactor, modernize, simplify, rebuild, reorganize, or perform unrelated cleanup.
5. Create an Implementation Plan for user review before making broad changes.
