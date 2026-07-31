import os
import re

src_dir = r"c:\Users\X1 Nano\Desktop\Git Local Repos\Sanestix.com\src"
components_dir = os.path.join(src_dir, "_includes", "components")
index_path = os.path.join(src_dir, "index.html")

with open(index_path, "r", encoding="utf-8") as f:
    content = f.read()

cta_pattern = r'(<!-- -- CTA BANNER -- -->\s*<section class="cta-banner">.*?</section>)'
cta_match = re.search(cta_pattern, content, re.DOTALL)

if cta_match:
    with open(os.path.join(components_dir, "cta-banner.njk"), "w", encoding="utf-8") as f:
        f.write(cta_match.group(1))
    
    new_content = content.replace(cta_match.group(1), '{% include "components/cta-banner.njk" %}')
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("CTA banner extracted.")
