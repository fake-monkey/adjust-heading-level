import * as vscode from 'vscode';
import { adjustHeadingLevel } from './utils';

export async function increaseHeading() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found');
        return;
    }

    adjustHeadingLevel(1);
}