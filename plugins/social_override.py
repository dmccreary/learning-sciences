"""MkDocs hook: override the social plugin's og:image / twitter:image tags
with a per-page custom image declared in front-matter as `image: path/to.png`.

Wired in mkdocs.yml via:

    hooks:
      - plugins/social_override.py

The `social` plugin generates auto-cards at /assets/images/social/*.png. This
hook replaces those URLs with a page-level override when `image:` is present
in the front-matter. Pages without an `image:` key are untouched.
"""

import re


def on_page_context(context, page, config, **kwargs):
    """Stash the page's custom image path (if any) on the page object."""
    if page.meta and "image" in page.meta:
        page.custom_image = page.meta["image"]
    return context


def on_post_page(html, page, config, **kwargs):
    """Rewrite social-plugin meta tags to point at the page's custom image."""
    if not hasattr(page, "custom_image"):
        return html

    site_url = config["site_url"].rstrip("/")
    image_path = "/" + page.custom_image.lstrip("/")
    full_image_url = site_url + image_path

    for tag in re.findall(r'<meta\s+property="og:image"[^>]*?>', html):
        if "/assets/images/social/" in tag:
            html = html.replace(
                tag, f'<meta property="og:image" content="{full_image_url}">'
            )

    for tag in re.findall(r'<meta\s+name="twitter:image"[^>]*?>', html):
        if "/assets/images/social/" in tag:
            html = html.replace(
                tag, f'<meta name="twitter:image" content="{full_image_url}">'
            )

    return html
