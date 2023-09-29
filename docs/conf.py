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

# -- Options for HTML output ---

html_title = project
html_theme = "sphinx_book_theme"
html_baseurl = "https://fedassembly.github.io/math-for-ml/"
html_static_path = ["_static"]
html_theme_options = {
    "repository_url": "https://github.com/fedassembly/math-for-ml",
    "use_repository_button": True,
}
