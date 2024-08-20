import { openDB } from 'idb';

// Initialize the IndexedDB database
const initdb = async () => {
  return openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
};

// Method to add or update content in the database with error handling
export const putDb = async (content) => {
  try {
    console.log('PUT to the database');

    // Ensure content is a string before storing
    if (typeof content !== 'string') {
      console.error('❌ - Attempted to save non-string content to database:', content);
      return;
    }

    // Open the database
    const db = await openDB('jate', 1);

    // Start a new transaction and specify the database and data privileges
    const tx = db.transaction('jate', 'readwrite');

    // Open the desired object store
    const store = tx.objectStore('jate');

    // Use the .put() method to update or add content to the store
    const request = store.put({ id: 1, content: content });

    // Get confirmation of the request
    const result = await request;
    console.log('🚀 - data saved to the database', result);
    return result;
  } catch (error) {
    console.error('❌ - Error saving to the database:', error);
    return null;
  }
};

// Method to get all content from the database with error handling
export const getDb = async () => {
  try {
    console.log('GET from the database');

    // Open the database
    const db = await openDB('jate', 1);

    // Start a new transaction and specify the database and data privileges
    const tx = db.transaction('jate', 'readonly');

    // Open the desired object store
    const store = tx.objectStore('jate');

    // Use the .get() method to get data with id 1
    const request = store.get(1);

    // Get confirmation of the request
    const result = await request;
    console.log('🚀 - data retrieved from the database', result);

    // Return the content field, or an empty string if not found
    return result?.content || '';
  } catch (error) {
    console.error('❌ - Error retrieving from the database:', error);
    return null;
  }
};

// Initialize the database on load
initdb();
