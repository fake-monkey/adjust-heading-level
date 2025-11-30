# Heading Level Adjuster

## Overview

This Visual Studio Code extension allows users to adjust the heading level of the selected text. It provides three commands: increase heading level, decrease heading level, and set heading level.

## Quickstart

1. Install the extension from the Visual Studio Code marketplace.
2. Select the text you want to adjust the heading level for.
3. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and search for one of the following commands:
   - `Increase Heading Level`: Increase the heading level of the selected text.
   - `Decrease Heading Level`: Decrease the heading level of the selected text.
   - `Batch Adjust Heading Level`: Batch adjust the heading level of the selected text by a specific shift.

## Key Features

This plugin smartly skips # symbols within code blocks and inline code when adjusting Markdown heading levels, ensuring only real headings are modified.

## Development Guide

1. Clone the repository and open the project in Visual Studio Code.
2. Run `npm install` to install the required dependencies.
3. Open the `.vscode/launch.json` file and ensure the following configurations are present:
   - An "extensionHost" launch task.
   - The "args" array contains "--disable-extensions".
   - The "preLaunchTask" is set to "npm: compile".
4. To run the extension in development mode, press `F5` or select "Start Debugging" from the Run menu.
5. To run the tests, open the command palette and search for "Tasks: Run Test Task", then select "npm: test".