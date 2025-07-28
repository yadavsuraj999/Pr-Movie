import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';

const TiptapEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Heading.configure({
        levels: [1, 2, 3, 4, 5],
      }),
    ],
    content: value || '<p></p>',
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="text-white space-y-2">
      {/* Toolbar without borders */}
      <div className="flex flex-wrap gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={`px-3 py-1 rounded text-sm ${
              editor.isActive('heading', { level }) ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
            }`}
          >
            H{level}
          </button>
        ))}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('bold') ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('italic') ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('underline') ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
          }`}
        >
          Underline
        </button>
      </div>

      {/* Editor Content styled like textarea */}
      <div className="w-full  bg-white/10 rounded-md text-white prose   ">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
