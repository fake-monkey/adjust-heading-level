# Structure-Aware Markdown Headings

[简体中文](README.zh-CN.md) | English

## Overview

**A Visual Studio Code extension designed for document merging and splitting workflows.** When you merge a Markdown document into another document, or extract a section into a standalone document, its headings often need to move together to fit their new position in the document hierarchy. This extension shifts the headings in a selection by the same amount while preserving their relative hierarchy.

The extension adjusts heading levels only; it does not merge, split, or create files.

Key features:

- Applies one consistent level shift to every selected heading, preserving the relative hierarchy between headings.
- Uses the Markdown document structure provided by Visual Studio Code to identify headings instead of relying on a text-wide regular expression.
- Avoids treating `#` symbols in content such as fenced code blocks as headings.
- Rejects the entire adjustment if any affected heading would fall outside Markdown heading levels 1 through 6, preventing partial changes.

## Quickstart

1. Install the extension from the Visual Studio Code marketplace.
2. Select the text you want to adjust the heading level for.
3. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and search for one of the following commands:
   - `Increase Heading Level`: Increase the heading level of the selected text.
   - `Decrease Heading Level`: Decrease the heading level of the selected text.
   - `Batch Adjust Heading Level`: Batch adjust the heading level of the selected text by a specific shift.

## Acknowledgements

> **Note: This is a fork of [Heading Level Adjuster](https://github.com/kevinslin/adjust-heading-level) with significant enhancements for structure-aware heading adjustment.**

[![Original Project](https://img.shields.io/badge/Original-Project-blue?style=flat)](https://github.com/kevinslin/adjust-heading-level)
[![Fork Version](https://img.shields.io/badge/Fork-Enhanced-green?style=flat)](https://github.com/fake-monkey/adjust-heading-level)
