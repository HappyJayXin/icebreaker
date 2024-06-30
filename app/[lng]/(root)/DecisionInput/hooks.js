import { useState, useEffect } from "react";

const placeholders = [
  "input_search_placeholder_1",
  "input_search_placeholder_2",
  "input_search_placeholder_3",
];

const getRandomPlaceholder = () => {
  const randomIndex = Math.floor(Math.random() * placeholders.length);
  return placeholders[randomIndex];
};

export const useRandomPlaceholder = () => {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    setPlaceholder(getRandomPlaceholder());
  }, []);

  return placeholder;
};
