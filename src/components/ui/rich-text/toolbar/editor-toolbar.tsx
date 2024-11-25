import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Code,
  Italic,
  List,
  ListOrdered,
  Minus,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react"; // You can use more icons from lucide-react if needed

import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, Toolbar } from "@/components/ui/rich-text/toolbar";
import { FormatType } from "./format-type";

interface EditorToolbarProps {
  editor: Editor;
}

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  return (
    <Toolbar
      className="m-0 flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 space-y-2 sm:space-y-0"
      aria-label="Formatting options"
    >
      {/* Text formatting actions */}
      <div className="flex space-x-2">
        <ToggleGroup className="flex space-x-2" type="multiple">
          <Toggle
            size="sm"
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            pressed={editor.isActive("bold")}
          >
            <Bold className="h-4 w-4" />
          </Toggle>

          <Toggle
            size="sm"
            onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            pressed={editor.isActive("italic")}
          >
            <Italic className="h-4 w-4" />
          </Toggle>

          <Toggle
            size="sm"
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            pressed={editor.isActive("strike")}
          >
            <Strikethrough className="h-4 w-4" />
          </Toggle>

          <Toggle
            size="sm"
            onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
            pressed={editor.isActive("codeBlock")}
          >
            <Code className="h-4 w-4" />
          </Toggle>
        </ToggleGroup>
      </div>

      {/* List Formatting */}
      <div className="flex space-x-2">
        <ToggleGroup className="flex space-x-2" type="multiple">
          <Toggle
            size="sm"
            onPressedChange={() =>
              editor.chain().focus().toggleBulletList().run()
            }
            pressed={editor.isActive("bulletList")}
          >
            <List className="h-4 w-4" />
          </Toggle>

          <Toggle
            size="sm"
            onPressedChange={() =>
              editor.chain().focus().toggleOrderedList().run()
            }
            pressed={editor.isActive("orderedList")}
          >
            <ListOrdered className="h-4 w-4" />
          </Toggle>

          <Toggle
            size="sm"
            onPressedChange={() =>
              editor.chain().focus().toggleBlockquote().run()
            }
            pressed={editor.isActive("blockquote")}
          >
            <Quote className="h-4 w-4" />
          </Toggle>

          <Toggle
            size="sm"
            onPressedChange={() =>
              editor.chain().focus().setHorizontalRule().run()
            }
          >
            <Minus className="h-4 w-4" />
          </Toggle>
        </ToggleGroup>
      </div>

      {/* Format Type Dropdown */}
      <div className="flex space-x-2">
        <FormatType editor={editor} />
      </div>

      {/* Undo/Redo */}
      <div className="flex space-x-2 mt-2 sm:mt-0">
        <ToggleGroup className="flex space-x-2" type="multiple">
          <Toggle
            size="sm"
            onPressedChange={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <Undo className="h-4 w-4" />
          </Toggle>

          <Toggle
            size="sm"
            onPressedChange={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <Redo className="h-4 w-4" />
          </Toggle>
        </ToggleGroup>
      </div>
    </Toolbar>
  );
};

export default EditorToolbar;
