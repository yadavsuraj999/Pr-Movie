import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import { TextStyle } from '@tiptap/extension-text-style';

const TiptapEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        underline: false,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5],
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      TextStyle,
      Color,
      Highlight,
    ],
    content: value || '',
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', false);
    }
  }, [value, editor]);

  if (!editor) return null;

  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL', previousUrl || '');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="text-white space-y-2">
      <div className="flex flex-wrap gap-2 mb-2">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            type='button'
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={`px-3 py-1 rounded text-sm ${
              editor.isActive('heading', { level }) ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
            }`}
          >
            H{level}
          </button>
        ))}
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('bold') ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
          }`}
        >
          Bold
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('italic') ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
          }`}
        >
          Italic
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('underline') ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
          }`}
        >
          Underline
        </button>
        <button
          type='button'
          onClick={addLink}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('link') ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
          }`}
        >
          Link
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('bulletList') ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white'
          }`}
        >
          Bullet List
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`px-3 py-1 rounded text-sm ${
            editor.isActive('highlight') ? 'bg-yellow-400 text-black' : 'bg-white/10 text-white'
          }`}
        >
          Highlight
        </button>
        <input
          type="color"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          className="w-10 h-8 p-0 border-0 rounded"
          title="Text Color"
        />
      </div>

      <div className="w-full bg-white/10 rounded-md text-white prose">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
