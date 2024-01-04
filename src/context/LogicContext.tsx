import React, { createContext, useState } from 'react';
import { IngredientData } from '../components/IngredientTile';

export interface LogicCtx {
  selectedIngredients: IngredientData[];
  addSelectedIngredient: (ingredient: IngredientData) => void;
  removeSelectedIngredient: (id: string) => void;
}

export const LogicContext = createContext<LogicCtx>({
  selectedIngredients: [],
  addSelectedIngredient: () => {},
  removeSelectedIngredient: () => {},
});

const LogicContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientData[]
  >([]);

  const addSelectedIngredient = (ingredient: IngredientData) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const removeSelectedIngredient = (id: string) => {
    setSelectedIngredients(selectedIngredients.filter((ing) => ing.id !== id));
  };

  return (
    <LogicContext.Provider
      value={{
        selectedIngredients,
        addSelectedIngredient,
        removeSelectedIngredient,
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};

export default LogicContextProvider;
