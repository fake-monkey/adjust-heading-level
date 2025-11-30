import { window, DocumentSymbol, commands, Position, Range } from 'vscode';

export async function adjustHeadingLevel(adjustment: number): Promise<void> {
    // Get the current activity editor
    const editor = window.activeTextEditor;
    if (!editor) {
        window.showErrorMessage('No active text editor found.');
        return;
    }
    
    const selection = editor.selection;
    if (selection.isEmpty) {
        window.showInformationMessage('No text selected');
        return;
    }

    // Retrieve the URI of the current document
    const documentUri = editor.document.uri;
    try {
        // Execute command to obtain document symbols
        const symbols = await commands.executeCommand<DocumentSymbol[] | undefined>(
            'vscode.executeDocumentSymbolProvider',
            documentUri
        );

        // Process the obtained symbol array
        if (!symbols || symbols.length <= 0) {
            window.showInformationMessage('The symbol was not found in this document.');
            return;
        }

        let resVec: { readonly range: Range, readonly text: string }[] | undefined = [];
        let errMsg = '';
        symbols.forEach(symbol => {
            class NodeIdx {
                readonly node: DocumentSymbol;
                idx: number;

                constructor(node: DocumentSymbol, idx: number) {
                    this.node = node;
                    this.idx = idx;
                }
            }
            const symbolStack: { readonly node: DocumentSymbol, idx: number }[] = [];
            symbolStack.push(new NodeIdx(symbol, 0));
            while (symbolStack.length != 0) {
                const curNodeIdx = symbolStack[symbolStack.length - 1];
                const curNode = curNodeIdx.node;
                const curRange = curNode.range;
                if (curRange.start.isAfterOrEqual(selection.end))
                    return;
                if (curRange.end.isBeforeOrEqual(selection.start)) {
                    symbolStack.pop();
                    continue;
                }
                if (curNodeIdx.idx == 0) {
                    const nextLinePos = new Position(curRange.start.line + 1, 0);
                    const intersection = selection.intersection(new Range(curRange.start, nextLinePos));
                    if (intersection && !intersection.isEmpty) {
                        const headingRegex = /^(#+) /;
                        const match = curNode.name.match(headingRegex);
                        if (match) {
                            const currentLevel = match[1].length;
                            const newLevel = currentLevel + adjustment;
                            if (newLevel < 1) {
                                resVec = undefined;
                                errMsg = `The title cannot be decrease in line ${curRange.start.line + 1}`;
                                return;
                            }
                            else if (newLevel > 6) {
                                resVec = undefined;
                                errMsg = `The title cannot be increase in line ${curRange.start.line + 1}`;
                                return;
                            }
                            const headingRange = new Range(curRange.start, nextLinePos);
                            const line = editor?.document.getText(headingRange);
                            resVec?.push({ range: headingRange, text: line.replace(headingRegex, '#'.repeat(newLevel) + ' ') });
                        }
                    }
                }
                if (curNodeIdx.idx < curNode.children.length) {
                    symbolStack.push(new NodeIdx(curNode.children[curNodeIdx.idx], 0));
                    curNodeIdx.idx += 1;
                }
                else {
                    symbolStack.pop();
                }
            }
        });

        if (resVec) {
            await editor.edit((editBuilder) => {
                resVec?.forEach(res => {
                    editBuilder.replace(res.range, res.text);
                })
            });
        }
        else {
            window.showErrorMessage(errMsg);
        }
    } catch (error) {
        window.showErrorMessage(`Error occurred while obtaining document symbols: ${error}`);
    }
}
