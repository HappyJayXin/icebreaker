import { useState, useEffect } from "react";

const MAX_HISTORY_ITEMS = 5;

const useLocalStorage = (key, initialValue = []) => {
  const [storedValue, setStoredValue] = useState([]);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : initialValue;
      setStoredValue(parsedItem);
    } catch (error) {
      setStoredValue(initialValue);
      console.error(`Error retrieving value from localStorage: ${error}`);
    }
  }, []);

  const setValue = (value) => {
    try {
      const updatedHistory = [value, ...storedValue.slice(0, MAX_HISTORY_ITEMS - 1)];
      setStoredValue(updatedHistory);
      window.localStorage.setItem(key, JSON.stringify(updatedHistory));
    } catch (error) {
      console.error(`Error storing value to localStorage: ${error}`);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
