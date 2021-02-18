import * as vscode from "vscode";

export default function createInputBox(placeholder?: string) {
    let newInputBox = vscode.window.createInputBox();
    if (placeholder) {
        newInputBox.placeholder = placeholder;
    }
    return newInputBox;
}
