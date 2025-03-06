"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { categories, words, addWord, deleteWord } from '@/data';
import { Word } from '@/types';

export default function AdminPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [newWord, setNewWord] = useState({
    text: '',
    lang: 'en-US',
    image: '',
    category: categories[0]?.id || ''
  });
  const [wordsList, setWordsList] = useState<Word[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWordsList(words);
  }, []);

  useEffect(() => {
    // Vérifier si le formulaire est valide
    const { text, image, category } = newWord;
    setIsFormValid(!!text && !!image && !!category);
  }, [newWord]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewWord(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      const addedWord = addWord(newWord);
      setWordsList([...wordsList, addedWord]);
      setNewWord({
        text: '',
        lang: 'en-US',
        image: '',
        category: categories[0]?.id || ''
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this word?')) {
      deleteWord(id);
      setWordsList(wordsList.filter(word => word.id !== id));
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">

      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">Admin Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Add New Word</h2>
          
          {showSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              Word added successfully!
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
                Word
              </label>
              <input
                type="text"
                id="text"
                name="text"
                value={newWord.text}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter word (e.g. apple)"
                required
              />
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={newWord.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={newWord.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="" disabled>Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                  isFormValid 
                    ? 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' 
                    : 'bg-indigo-300 cursor-not-allowed'
                }`}
              >
                Add Word
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Manage Words</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Word
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {wordsList.map(word => (
                  <tr key={word.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{word.text}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="h-12 w-12 relative">
                        <Image
                          src={word.image}
                          alt={word.text}
                          fill
                          sizes="(max-width: 768px) 100vw, 150px"
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                        {categories.find(cat => cat.id === word.category)?.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleDelete(word.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 