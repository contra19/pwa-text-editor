import { openDB } from 'idb';
import { header } from './header';

const initdb = async () => {
  const db = await openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        const store = db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');

        // Insert the header content as the first value
        store.put({ id: 1, content: header });
        console.log('Header content added to the database');
      }
    },
  });
};

// Method to add content to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  
  const request = store.put({ id: 1, content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// Method to get all content from the database
export const getDb = async () => {
  console.log('GET from the database');

  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  
  const request = store.get(1);
  const result = await request;
  console.log('🚀 - data retrieved from the database', result);
  return result ? result.content : null;
};

// Initialize the database
initdb();
