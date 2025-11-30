import * as vscode from 'vscode';
import { increaseHeading } from './increaseHeading';
import { decreaseHeading } from './decreaseHeading';
import { batchAdjustHeading } from './batchAdjustHeading';

export function activate(context: vscode.ExtensionContext) {
    const increaseHeadingCommand = vscode.commands.registerCommand('extension.increaseHeading', () => {
        increaseHeading();
    });

    const decreaseHeadingCommand = vscode.commands.registerCommand('extension.decreaseHeading', () => {
        decreaseHeading();
    });

    const batchAdjustHeadingCommand = vscode.commands.registerCommand('extension.batchAdjustHeading', () => {
        batchAdjustHeading();
    });

    context.subscriptions.push(increaseHeadingCommand);
    context.subscriptions.push(decreaseHeadingCommand);
    context.subscriptions.push(batchAdjustHeadingCommand);
}

export function deactivate() {}