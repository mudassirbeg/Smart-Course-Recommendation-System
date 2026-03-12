import os

file_path = "d:/Projects/AI's Project/smart.html"
css_path = "d:/Projects/AI's Project/style.css"
js_path = "d:/Projects/AI's Project/script.js"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

css_start: int = -1
css_end: int = -1
js_start: int = -1
js_end: int = -1

for i, line in enumerate(lines):
    if "<style" in line and css_start == -1:
        css_start = i
    elif "</style>" in line and css_end == -1:
        css_end = i
    elif "<script" in line and js_start == -1:
        js_start = i
    elif "</script>" in line and js_end == -1:
        js_end = i

print(f"CSS: {css_start} to {css_end}")
print(f"JS: {js_start} to {js_end}")

if css_start != -1 and css_end != -1:
    css_content = lines[slice(css_start+1, css_end)]  # type: ignore
    # Remove one level of indentation maybe, but fine as is
    with open(css_path, "w", encoding="utf-8") as f:
        f.writelines(css_content)

if js_start != -1 and js_end != -1:
    js_content = lines[slice(js_start+1, js_end)]  # type: ignore
    with open(js_path, "w", encoding="utf-8") as f:
        f.writelines(js_content)

# create new html
new_html = []
new_html.extend(lines[:css_start])  # type: ignore
new_html.append('    <link rel="stylesheet" href="style.css">\n')
new_html.extend(lines[css_end+1:js_start])  # type: ignore
new_html.append('    <script src="script.js"></script>\n')
new_html.extend(lines[js_end+1:])  # type: ignore

with open(file_path, "w", encoding="utf-8") as f:
    f.writelines(new_html)

print("Extraction complete.")
