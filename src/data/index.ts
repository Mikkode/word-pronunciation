import { Word, Category } from "@/types";
import { v4 as uuidv4 } from "uuid";

export const categories: Category[] = [
  {
    id: "strokes-lines",
    name: "Strokes & Lines",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>',
    purpose:
      "Introduce basic fine motor skills and the foundations for letter formation.",
  },
  {
    id: "letter-recognition",
    name: "Letter Recognition",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>',
    purpose:
      "Help students recognize and recall both uppercase and lowercase letters.",
  },
  {
    id: "letter-formation",
    name: "Letter Formation",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>',
    purpose: "Guide proper letter formation through practice.",
  },
  {
    id: "phonics-sounds",
    name: "Phonics & Letter Sounds",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>',
    purpose:
      "Build the connection between letters and their corresponding sounds.",
  },
  {
    id: "cvc-words",
    name: "CVC Words",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>',
    purpose: "Teach students to blend sounds to read simple 3-letter words.",
  },
  {
    id: "ccvc-words",
    name: "CCVC Words",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>',
    purpose: "Introduce more complex 4-letter words with consonant blends.",
  },
  {
    id: "digraphs",
    name: "Digraphs",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
    purpose:
      "Teach students to recognize and pronounce letter combinations that make a single sound.",
  },
  {
    id: "blends",
    name: "Blends",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>',
    purpose:
      "Help students master consonant blends and recognize how two consonants can combine to make a distinct sound.",
  },
  {
    id: "sentence-writing",
    name: "Sentence Writing",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
    purpose: "Guide students to form basic sentences using CVC words.",
  },
  {
    id: "high-frequency-words",
    name: "High-Frequency Words",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
    purpose:
      "Introduce and reinforce high-frequency words that frequently appear in early reading materials, helping to improve reading fluency.",
  },
  {
    id: "interactive-learning",
    name: "Interactive Learning",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    purpose:
      "Provide at-home practice with flashcards and other printable resources.",
  },
];

export const words: Word[] = [
  // Strokes & Lines
  {
    id: uuidv4(),
    text: "vertical line",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "strokes-lines",
  },
  {
    id: uuidv4(),
    text: "horizontal line",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "strokes-lines",
  },
  {
    id: uuidv4(),
    text: "diagonal line",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "strokes-lines",
  },
  {
    id: uuidv4(),
    text: "curved line",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "strokes-lines",
  },

  // Letter Recognition
  {
    id: uuidv4(),
    text: "A",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "letter-recognition",
  },
  {
    id: uuidv4(),
    text: "B",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "letter-recognition",
  },
  {
    id: uuidv4(),
    text: "C",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1510935813936-763eb6fbc7f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "letter-recognition",
  },
  {
    id: uuidv4(),
    text: "D",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "letter-recognition",
  },

  // Letter Formation
  {
    id: uuidv4(),
    text: "Write A",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "letter-formation",
  },
  {
    id: uuidv4(),
    text: "Write B",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "letter-formation",
  },
  {
    id: uuidv4(),
    text: "Write C",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "letter-formation",
  },
  {
    id: uuidv4(),
    text: "Write D",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "letter-formation",
  },

  // Phonics & Letter Sounds
  {
    id: uuidv4(),
    text: "A is for Apple",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "phonics-sounds",
  },
  {
    id: uuidv4(),
    text: "B is for Ball",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "phonics-sounds",
  },
  {
    id: uuidv4(),
    text: "C is for Cat",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "phonics-sounds",
  },
  {
    id: uuidv4(),
    text: "D is for Dog",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "phonics-sounds",
  },

  // CVC Words
  {
    id: uuidv4(),
    text: "cat",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "cvc-words",
  },
  {
    id: uuidv4(),
    text: "dog",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "cvc-words",
  },
  {
    id: uuidv4(),
    text: "sun",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "cvc-words",
  },
  {
    id: uuidv4(),
    text: "pen",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "cvc-words",
  },

  // CCVC Words
  {
    id: uuidv4(),
    text: "frog",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "ccvc-words",
  },
  {
    id: uuidv4(),
    text: "stop",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1551041777-ed277b8dd348?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "ccvc-words",
  },
  {
    id: uuidv4(),
    text: "flag",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1508005213340-71d3e6ae7be8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "ccvc-words",
  },
  {
    id: uuidv4(),
    text: "clap",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "ccvc-words",
  },

  // Digraphs
  {
    id: uuidv4(),
    text: "sh in ship",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1566795180883-a2f3b5c6d85a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "digraphs",
  },
  {
    id: uuidv4(),
    text: "ch in chair",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "digraphs",
  },
  {
    id: uuidv4(),
    text: "th in thumb",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1559701404-0c2e232d24c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "digraphs",
  },
  {
    id: uuidv4(),
    text: "wh in wheel",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "digraphs",
  },

  // Blends
  {
    id: uuidv4(),
    text: "bl in black",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "blends",
  },
  {
    id: uuidv4(),
    text: "st in star",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "blends",
  },
  {
    id: uuidv4(),
    text: "gr in grass",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "blends",
  },
  {
    id: uuidv4(),
    text: "tr in tree",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "blends",
  },

  // Sentence Writing
  {
    id: uuidv4(),
    text: "The cat ran.",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "sentence-writing",
  },
  {
    id: uuidv4(),
    text: "I see a dog.",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "sentence-writing",
  },
  {
    id: uuidv4(),
    text: "The sun is hot.",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "sentence-writing",
  },
  {
    id: uuidv4(),
    text: "I can hop.",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "sentence-writing",
  },

  // High-Frequency Words
  {
    id: uuidv4(),
    text: "the",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "high-frequency-words",
  },
  {
    id: uuidv4(),
    text: "is",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "high-frequency-words",
  },
  {
    id: uuidv4(),
    text: "you",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "high-frequency-words",
  },
  {
    id: uuidv4(),
    text: "and",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "high-frequency-words",
  },

  // Interactive Learning
  {
    id: uuidv4(),
    text: "Match letters",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "interactive-learning",
  },
  {
    id: uuidv4(),
    text: "Find the word",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "interactive-learning",
  },
  {
    id: uuidv4(),
    text: "Word puzzle",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "interactive-learning",
  },
  {
    id: uuidv4(),
    text: "Letter game",
    lang: "en-US",
    image:
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=150&q=70",
    category: "interactive-learning",
  },
];

// Fonction pour obtenir les mots par catégorie
export function getWordsByCategory(categoryId: string): Word[] {
  console.log("Recherche de mots pour la catégorie:", categoryId);
  console.log("Nombre total de mots:", words.length);

  if (categoryId === "all") return words;

  const filteredWords = words.filter((word) => word.category === categoryId);
  console.log("Mots filtrés:", filteredWords.length);

  return filteredWords;
}

// Fonction pour obtenir un mot par ID
export function getWordById(id: string): Word | undefined {
  return words.find((word) => word.id === id);
}

// Fonction pour ajouter un nouveau mot
export function addWord(word: Omit<Word, "id">): Word {
  const newWord = { ...word, id: uuidv4() };
  words.push(newWord);
  return newWord;
}

// Fonction pour supprimer un mot
export function deleteWord(id: string): boolean {
  const index = words.findIndex((word) => word.id === id);
  if (index !== -1) {
    words.splice(index, 1);
    return true;
  }
  return false;
}
