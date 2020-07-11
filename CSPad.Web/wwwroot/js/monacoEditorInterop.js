﻿var monacoInterop = {};

monacoInterop.editors = {};

monacoInterop.initialize = function initialize(elementId, initialCode, language) {
    require.config({ paths: { 'vs': 'lib/monaco-editor/min/vs' } });
    require(['vs/editor/editor.main'], function initializeEditor() {
        var editor = monaco.editor.create(document.getElementById(elementId), {
            value: initialCode,
            language: language
        });
        monacoInterop.editors[elementId] = editor;
    });
}

monacoInterop.getCode = function getCode(elementId) {
    return monacoInterop.editors[elementId].getValue();
}

monacoInterop.setCode = function setCode(elementId, code) {
    monacoInterop.editors[elementId].setValue(code);
}

window.monacoInterop = monacoInterop;