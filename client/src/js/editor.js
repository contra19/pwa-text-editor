import { getDb, putDb } from './database';
import { header } from './header';

export default class Editor {
  constructor() {
    const localData = localStorage.getItem('content');

    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
      const editorContent = data || localData || header;
      this.editor.setValue(editorContent);
    });

    this.editor.on('change', () => {
      const content = this.editor.getValue();
      localStorage.setItem('content', content);
    });

    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      const content = this.editor.getValue();
      putDb(content);
    });
  }
}
