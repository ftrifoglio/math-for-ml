SHELL = /bin/bash
VENV_DIR = .venv
POETRY_DIR = .poetry
PYTHON_VERSION = 3.11
PYTHON = $(VENV_DIR)/bin/python
POETRY = $(POETRY_DIR)/bin/poetry
PIP = $(POETRY_DIR)/bin/pip
# COLOURS
COLOUR_GREEN=\033[0;32m
COLOUR_RED=\033[0;31m
COLOUR_BLUE=\033[0;34m
COLOUR_END=\033[0m

.DEFAULT_GOAL = help

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; \
	printf "\nUsage: make\n\nTargets:\n"} \
	/^[a-zA-Z_-]+:.*?##/ \
	{ printf "$(COLOUR_BLUE)%-15s$(COLOUR_END) %s\n", $$1, $$2 }' \
	$(MAKEFILE_LIST)

.python-version:
	@brew upgrade pyenv --quiet
	@pyenv install $(PYTHON_VERSION) --skip-existing
	@pyenv local $(PYTHON_VERSION)

$(POETRY_DIR):
	@python -m venv $(POETRY_DIR)
	@$(PIP) install pip --upgrade --quiet
	@$(PIP) install wheel --quiet
	@$(PIP) install poetry==1.6.1 --quiet

$(VENV_DIR): $(POETRY_DIR)
	@$(POETRY) install --no-interaction

.PHONY = _venv venv

_venv: .python-version \
	$(VENV_DIR)

venv: _venv ## Create environment

html_doc: ## Create HTML documentation
	@rm -rf docs/build
	@rm -rf docs/_autosummary
	@cd docs && make html
	@open docs/build/html/index.html

.PHONY = clean

clean: ## Clean up environment
	@rm -rf $(VENV_DIR)
	@rm -rf $(POETRY_DIR)
	@rm -f poetry.lock
	@rm -f .python-version
	@find . | grep __pycache__ | xargs rm -rf
	@find . | grep .ipynb_checkpoints | xargs rm -rf
