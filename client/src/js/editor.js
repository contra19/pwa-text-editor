import { getDb, putDb } from './database';
import { header } from './header';

export default class {
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

    // Load data from IndexedDB or fall back to localStorage or a default header
    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
    
      // Check if `data` is null or undefined explicitly
      let editorContent;
      if (data !== null && data !== undefined) {
        editorContent = data;
      } else if (localData !== null && localData !== undefined) {
        editorContent = localData;
      } else {
        editorContent = header;
      }
    
      // Set the editor's content with the resolved value
      this.editor.setValue(editorContent);
    });
    

    this.editor.on('change', () => {
      // Save the current content to localStorage
      localStorage.setItem('content', this.editor.getValue());
    });

    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      
      // Get the content from the editor as a string
      const editorContent = this.editor.getValue();
      
      // Pass the string content directly to putDb
      putDb(editorContent);
    });
  }
}
