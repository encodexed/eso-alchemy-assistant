import React, { createContext, useEffect, useState } from 'react';
import { IngredientData } from '../components/IngredientTile';
import ingredientsData from '../data/IngredientsData.json';

export interface LogicCtx {
  ingredientsList: IngredientData[];
  selectedIngredients: IngredientData[];
  selectedIngredientEffects: string[];
  addSelectedIngredient: (ingredient: IngredientData) => void;
  removeSelectedIngredient: (id: string) => void;
}

export const LogicContext = createContext<LogicCtx>({
  ingredientsList: [],
  selectedIngredients: [],
  selectedIngredientEffects: [],
  addSelectedIngredient: () => {},
  removeSelectedIngredient: () => {},
});

const LogicContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ingredientsList, setIngredientsList] = useState<IngredientData[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientData[]
  >([]);
  const [selectedIngredientEffects, setSelectedIngredientEffects] = useState<
    string[]
  >([]);

  useEffect(() => {
    const initList: IngredientData[] = ingredientsData.ingredients.map(
      (data) => {
        return { ...data, isSelected: false };
      },
    );
    setIngredientsList(initList);
  }, []);

  // ? Could setting the ingredients list here be done better, and possibly DRYer?

  const addSelectedIngredient = (ingredient: IngredientData) => {
    if (selectedIngredients.length >= 3) {
      return;
    }

    const newSelectedIngredients: IngredientData[] = [
      ...selectedIngredients,
      ingredient,
    ];
    setSelectedIngredients(newSelectedIngredients);
    updateSelectedIngredientEffects(newSelectedIngredients);

    setIngredientsList((prev) => {
      return prev.map((data) => {
        if (data.id === ingredient.id) data.isSelected = true;
        return data;
      });
    });
  };

  const updateSelectedIngredientEffects = (ingredients: IngredientData[]) => {
    const effectsList = ingredients.flatMap((data) => {
      const { effect1, effect2, effect3, effect4 } = data;
      return [effect1, effect2, effect3, effect4];
    });

    setSelectedIngredientEffects(effectsList);
  };

  const removeSelectedIngredient = (id: string) => {
    setSelectedIngredients(selectedIngredients.filter((ing) => ing.id !== id));
    setIngredientsList((prev) => {
      return prev.map((data) => {
        if (data.id === id) data.isSelected = false;
        return data;
      });
    });
  };

  return (
    <LogicContext.Provider
      value={{
        ingredientsList,
        selectedIngredients,
        selectedIngredientEffects,
        addSelectedIngredient,
        removeSelectedIngredient,
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};

export default LogicContextProvider;
