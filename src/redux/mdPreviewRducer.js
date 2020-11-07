import marked from 'marked';
import {PREVIEW} from './actions';

const DEFAULT_TEXT = "# Welcome \n\n## This Markdown Previewer is built with [react](https://reactjs.org), [redux](https://redux.js.org) and [marked](https://marked.js.org/).\n\n## Code\nHere is some code, `<div></div>`.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;}}\n```\n## Blockquotes\n> Blockquotes are very handy in email to emulate reply text.> This line is part of the same quote.\n## Lists\n1. First ordered list item\n2. Another item\n\n## Images\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')\n\n## Bold\nYou can write text in **bold**."

marked.setOptions({
    renderer: new marked.Renderer(),
    breaks: true,
});
const initialState = {
    editor: DEFAULT_TEXT,
    preview: marked(DEFAULT_TEXT)
}
export default function mdPreviewReducer(state = initialState, action) {

        switch (action.type) {
            case PREVIEW:
                return {
                    editor: action.payload,
                    preview: marked(action.payload)
                };
        
            default:
                return state;
        }
}