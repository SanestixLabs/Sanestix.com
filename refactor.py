import os
import re

src_dir = r"c:\Users\X1 Nano\Desktop\Git Local Repos\Sanestix.com\src"
includes_dir = os.path.join(src_dir, "_includes")
layouts_dir = os.path.join(includes_dir, "layouts")
components_dir = os.path.join(includes_dir, "components")

os.makedirs(layouts_dir, exist_ok=True)
os.makedirs(components_dir, exist_ok=True)

# Read index.html
with open(os.path.join(src_dir, "index.html"), "r", encoding="utf-8") as f:
    index_content = f.read()

# 1. Extract Whatsapp
wa_pattern = r'(<!-- -- FLOATING WHATSAPP -- -->\s*<a[^>]*class="wa-float.*?</a>\s*)'
wa_match = re.search(wa_pattern, index_content, re.DOTALL)
if wa_match:
    with open(os.path.join(components_dir, "whatsapp.njk"), "w", encoding="utf-8") as f:
        f.write(wa_match.group(1))

# 2. Extract Navbar
nav_pattern = r'(<!-- -- NAVIGATION -- -->\s*<nav id="navbar">.*?</nav>\s*<div class="mobile-menu".*?</div>\s*)'
nav_match = re.search(nav_pattern, index_content, re.DOTALL)
if nav_match:
    with open(os.path.join(components_dir, "navbar.njk"), "w", encoding="utf-8") as f:
        f.write(nav_match.group(1))

# 3. Extract Footer
footer_pattern = r'(<!-- -- FOOTER -- -->\s*<footer>.*?</footer>\s*)'
footer_match = re.search(footer_pattern, index_content, re.DOTALL)
if footer_match:
    with open(os.path.join(components_dir, "footer.njk"), "w", encoding="utf-8") as f:
        f.write(footer_match.group(1))

# 4. Create base layout
# Get head and everything before floating whatsapp / navbar
head_end_pattern = r'(.*?)(?=<!-- -- FLOATING WHATSAPP -- -->|<!-- -- NAVIGATION -- -->|<main)'
head_match = re.search(head_end_pattern, index_content, re.DOTALL)
head_content = head_match.group(1) if head_match else ""

# Replace title and meta description
head_content = re.sub(r'<title>.*?</title>', '<title>{{ title | default("Sanestix | AI-Powered Web Development & Automation Agency") }}</title>', head_content)
head_content = re.sub(r'<meta name="description"\s*content=".*?"\s*/>', '<meta name="description" content="{{ description | default(\'Sanestix builds AI-powered websites...\') }}" />', head_content)

# Get scripts at the bottom
scripts_pattern = r'(<button id="scrollTopBtn".*?</body>\s*</html>)'
scripts_match = re.search(scripts_pattern, index_content, re.DOTALL)
scripts_content = scripts_match.group(1) if scripts_match else ""

base_layout = f"""{head_content}
  {{% include "components/whatsapp.njk" %}}
  {{% include "components/navbar.njk" %}}

  <main id="main-content" tabindex="-1">
    {{{{ content | safe }}}}
  </main>

  {{% include "components/footer.njk" %}}
  
{scripts_content}
"""

with open(os.path.join(layouts_dir, "base.njk"), "w", encoding="utf-8") as f:
    f.write(base_layout)

# 5. Process all HTML files
html_files = [f for f in os.listdir(src_dir) if f.endswith(".html")]

for file in html_files:
    file_path = os.path.join(src_dir, file)
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract just what is inside <main>
    main_pattern = r'<main[^>]*>(.*?)</main>'
    main_match = re.search(main_pattern, content, re.DOTALL)
    
    if main_match:
        inner_content = main_match.group(1).strip()
    else:
        # Fallback: remove head, body, footer, nav, whatsapp, scripts
        inner_content = content
        inner_content = re.sub(r'.*?<body[^>]*>', '', inner_content, flags=re.DOTALL)
        inner_content = re.sub(wa_pattern, '', inner_content, flags=re.DOTALL)
        inner_content = re.sub(nav_pattern, '', inner_content, flags=re.DOTALL)
        inner_content = re.sub(footer_pattern, '', inner_content, flags=re.DOTALL)
        inner_content = re.sub(scripts_pattern, '', inner_content, flags=re.DOTALL)
        inner_content = inner_content.strip()

    # Get title if it exists to add to frontmatter
    title_match = re.search(r'<title>(.*?)</title>', content)
    title = title_match.group(1) if title_match else ""
    
    frontmatter = f"---\nlayout: base.njk\n"
    if title:
        frontmatter += f'title: "{title}"\n'
    frontmatter += "---\n\n"
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(frontmatter + inner_content)

print("HTML files refactored successfully.")
