import * as vscode from 'vscode';
import { adjustHeadingLevel } from './utils';

export async function batchAdjustHeading() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found');
        return;
    }

    const inputBoxOptions: vscode.InputBoxOptions = {
        prompt: 'Enter heading level change (-5 to 5)',
        validateInput: (value) => {
            const level = parseInt(value);
            if (isNaN(level) || level < -5 || level > 5) {
                return 'Must be a number from -5 to 5';
            }
            return null;
        },
    };

    const levelInput = await vscode.window.showInputBox(inputBoxOptions);
    if (!levelInput) {
        return;
    }

    adjustHeadingLevel(parseInt(levelInput));
}
