import { Word, Category } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const categories: Category[] = [
  {
    id: 'animals',
    name: 'Animals',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>'
  },
  {
    id: 'objects',
    name: 'Objects',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>'
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>'
  },
  {
    id: 'food',
    name: 'Food',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
  }
];

export const words: Word[] = [
  // Animals - 8 mots
  { 
    id: uuidv4(),
    text: "cat", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "animals"
  },
  { 
    id: uuidv4(),
    text: "dog", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "animals"
  },
  { 
    id: uuidv4(),
    text: "bird", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "animals"
  },
  { 
    id: uuidv4(),
    text: "fish", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "animals"
  },
  { 
    id: uuidv4(),
    text: "elephant", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "animals"
  },
  { 
    id: uuidv4(),
    text: "lion", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "animals"
  },
  { 
    id: uuidv4(),
    text: "monkey", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "animals"
  },
  { 
    id: uuidv4(),
    text: "giraffe", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "animals"
  },
  
  // Objects - 8 mots
  { 
    id: uuidv4(),
    text: "chair", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "objects"
  },
  { 
    id: uuidv4(),
    text: "table", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "objects"
  },
  { 
    id: uuidv4(),
    text: "book", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "objects"
  },
  { 
    id: uuidv4(),
    text: "pencil", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "objects"
  },
  { 
    id: uuidv4(),
    text: "phone", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "objects"
  },
  { 
    id: uuidv4(),
    text: "computer", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "objects"
  },
  { 
    id: uuidv4(),
    text: "clock", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "objects"
  },
  { 
    id: uuidv4(),
    text: "lamp", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "objects"
  },
  
  // Vehicles - 7 mots
  { 
    id: uuidv4(),
    text: "car", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "vehicles"
  },
  { 
    id: uuidv4(),
    text: "bicycle", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "vehicles"
  },
  { 
    id: uuidv4(),
    text: "bus", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "vehicles"
  },
  { 
    id: uuidv4(),
    text: "train", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "vehicles"
  },
  { 
    id: uuidv4(),
    text: "airplane", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "vehicles"
  },
  { 
    id: uuidv4(),
    text: "boat", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "vehicles"
  },
  { 
    id: uuidv4(),
    text: "motorcycle", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "vehicles"
  },
  
  // Food - 7 mots
  { 
    id: uuidv4(),
    text: "apple", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "food"
  },
  { 
    id: uuidv4(),
    text: "banana", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "food"
  },
  { 
    id: uuidv4(),
    text: "bread", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "food"
  },
  { 
    id: uuidv4(),
    text: "pizza", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "food"
  },
  { 
    id: uuidv4(),
    text: "cake", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "food"
  },
  { 
    id: uuidv4(),
    text: "chocolate", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "food"
  },
  { 
    id: uuidv4(),
    text: "ice cream", 
    lang: "en-US",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "food"
  }
];

// Fonction pour obtenir les mots par catégorie
export function getWordsByCategory(categoryId: string): Word[] {
  if (categoryId === 'all') return words;
  return words.filter(word => word.category === categoryId);
}

// Fonction pour obtenir un mot par ID
export function getWordById(id: string): Word | undefined {
  return words.find(word => word.id === id);
}

// Fonction pour ajouter un nouveau mot
export function addWord(word: Omit<Word, 'id'>): Word {
  const newWord = { ...word, id: uuidv4() };
  words.push(newWord);
  return newWord;
}

// Fonction pour supprimer un mot
export function deleteWord(id: string): boolean {
  const index = words.findIndex(word => word.id === id);
  if (index !== -1) {
    words.splice(index, 1);
    return true;
  }
  return false;
} 