import * as vscode from "vscode";

let refreshedVariables = () => {
    let activeFileName,
        activeFileFolder,
        fileNameWithoutExtension,
        fileExtension,
        fileNameWithExtension,
        fileFolder,
        filePath;
    if (
        vscode.window.activeTextEditor &&
        vscode.window.activeTextEditor.document
    ) {
        activeFileName = vscode.window.activeTextEditor?.document.fileName.split(
            "\\",
        )[
            vscode.window.activeTextEditor?.document.fileName.split("\\")
                .length - 1
        ];
        activeFileFolder = vscode.window.activeTextEditor?.document.fileName.split(
            "\\",
        )[
            vscode.window.activeTextEditor?.document.fileName.split("\\")
                .length - 2
        ];
        fileNameWithoutExtension = activeFileName?.split(".")[0];
        fileExtension = activeFileName?.split(".")[1];
        fileNameWithExtension = activeFileName;
        fileFolder = activeFileFolder;
        filePath = vscode.window.activeTextEditor.document.fileName;
    }

    const wsEdit = new vscode.WorkspaceEdit();
    const wsPath = vscode.workspace.workspaceFolders![0].uri.fsPath;
    const nullText = new Uint8Array([]);
    let fileData: string = "";
    const terminals = vscode.window.terminals;
    const terminalPath: any = vscode.workspace
        .getConfiguration("terminal")
        .get("integrated.shell.windows");
    const activeTerminal = vscode.window.activeTerminal;
    const createTerminal = (name: string, path: string) => {
        return vscode.window.createTerminal(name, path);
    };
    const ccName = "custom_commands";
    const ccExtension = ".txt";
    const customTerminalName = "line";
    const inputSign = "->";
    const optionalInputSign = "-o>";
    let inputSign_regex_glob = new RegExp(inputSign, "gi");
    let inputSign_regex = new RegExp(inputSign, "i");
    let optionalInputSign_regex_glob = new RegExp(optionalInputSign, "gi");
    let optionalInputSign_regex = new RegExp(optionalInputSign, "i");
    let cancelled_input = "Process cancelled";
    return {
        fileNameWithExtension,
        fileNameWithoutExtension,
        fileExtension,
        fileFolder,
        nullText,
        wsPath,
        wsEdit,
        fileData,
        terminals,
        terminalPath,
        activeTerminal,
        createTerminal,
        ccName,
        ccExtension,
        customTerminalName,
        filePath,
        inputSign,
        optionalInputSign,
        inputSign_regex_glob,
        inputSign_regex,
        optionalInputSign_regex_glob,
        optionalInputSign_regex,
        cancelled_input,
    };
};

export default refreshedVariables;