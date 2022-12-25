import { Editor } from "../types/Editor";

function StopDemonstration(editor: Editor): Editor //ПОКАЗ СЛАЙДОВ +
{
    return {
      ...editor,
      isPreview: false,
    };
}