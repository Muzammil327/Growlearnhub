'use client'
import React from 'react'
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import EditorToolbar from './toolbar/editor-toolbar'

interface EditorProps {
  content: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Editor = ({ content, placeholder, onChange }: EditorProps) => {

  // Initialize the editor with StarterKit and default content
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  })

  // Check if the editor is initialized before rendering the BubbleMenu and EditorContent
  if (!editor) {
    return null // Return null if the editor is not initialized yet
  }

  return (
    <div className="prose dark:prose-invert w-full max-w-none border border-input bg-background">
      <EditorToolbar editor={editor} />
      <div className="editor">
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bubble-menu">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
            >
              Strike
            </button>
          </div>
        </BubbleMenu>

        {/* Render the editor content */}
        <EditorContent editor={editor} placeholder={placeholder} />
      </div>
    </div>

  )
}

export default Editor;
