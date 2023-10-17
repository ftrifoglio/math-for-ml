# -- Project information ---

author = "Federico Trifoglio"
project = "Mathematics for Machine Learning and Data Science"
version = "0.1.0"
copyright = "2023"

# -- General configuration ---

extensions = [
    "nbsphinx",
    "sphinx_book_theme",
]

nbsphinx_execute = "always"
nbsphinx_allow_errors = True

# -- Options for HTML output ---

html_title = project
html_theme = "sphinx_book_theme"
html_baseurl = "https://fedassembly.github.io/math-for-ml/"
html_static_path = ["_static"]
html_css_files = ["custom.css"]
html_js_files = ["custom.js"]
html_theme_options = {
    "repository_url": "https://github.com/fedassembly/math-for-ml",
    "use_repository_button": True,
    "show_toc_level": 3,
    "extra_footer": """<div id="imageOverlay"><img id="overlayImage" src=""></div>""",
}
