import { Editor } from "../types/Editor";

function ChangePresentationName(editor: Editor, name: string): Editor //ИЗМЕНЯЕТ НАЗВАНИЕ ПРЕЗЕНТАЦИИ +
{
    return {
      ...editor,
      presentation: {
        ...editor.presentation,
        name,
      },
    };
}