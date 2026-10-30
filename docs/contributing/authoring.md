---
sidebar_position: 1
title: Authoring guide
---

## Scope

These docs are a help guide for people inside one organization: administrators, managers, accountants, auditors and viewers. Do not document platform-level administration, internal architecture, infrastructure, deployment, credentials or source repositories.

## Add a page

1. Create a Markdown file under `docs/<section>/`. Folders become sidebar categories automatically.
2. Start the file with front matter:

   ```yaml
   ---
   sidebar_position: 3
   title: Page title
   ---
   ```

3. Add a `_category_.json` with a `label` and `position` when creating a new section.
4. Run `npm run build`. Broken links fail the build.

## Add images

Commit images to `screenshots/` at the repository root and reference them through the CDN:

```text
https://cdn.jsdelivr.net/gh/samuelek25k/mansion-docs@main/screenshots/<file>.png
```

## Publish release notes

Add a Markdown file named `YYYY-MM-DD-title.md` under `releases/` with a `title` in the front matter. Files starting with an underscore are ignored, so `releases/_template.md` is never published.

## Version the docs for a release

When a release ships, freeze the current docs and keep editing the next version:

```bash
npm run docs:version 1.1
```

Older versions stay available from the version dropdown in the navigation bar.

## Publishing

Pushing to `main` builds and publishes the site. Pull requests run the build only.
