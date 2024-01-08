import React, { createContext, useEffect, useState } from 'react';
import ingredientsData from '../data/IngredientsData.json';
import effectsData from '../data/EffectsData.json';
import { EffectData, IngredientData, LogicCtx } from '../data/interfaces';

export const LogicContext = createContext<LogicCtx>({
  ingredientsList: [],
  effectsList: [],
  selectedIngredients: [],
  selectedIngredientEffects: [],
  addSelectedIngredient: () => {},
  removeSelectedIngredient: () => {},
});

const LogicContextProvider = ({ children }: { children: React.ReactNode }) => {
  // * useStates *
  const [ingredientsList, setIngredientsList] = useState<IngredientData[]>([]);
  const [effectsList, setEffectsList] = useState<EffectData[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientData[]
  >([]);
  const [selectedIngredientEffects, setSelectedIngredientEffects] = useState<
    string[]
  >([]);

  // * useEffects *
  useEffect(() => {
    const initIngredientList: IngredientData[] =
      ingredientsData.ingredients.map((data) => {
        return { ...data, isSelected: false };
      });
    setIngredientsList(initIngredientList);

    const initEffectList: EffectData[] = effectsData.effects.map((data) => {
      return { ...data, assignedColor: 'none' };
    });
    setEffectsList(initEffectList);
  }, []);

  // ? Could setting the ingredients list here be done better, and possibly DRYer?
  // * Functions *
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
      const { effects } = data;
      return [...effects];
    });

    setSelectedIngredientEffects(effectsList);
  };

  const removeSelectedIngredient = (id: number) => {
    setSelectedIngredients(
      selectedIngredients.filter((data) => data.id !== id),
    );
    setIngredientsList((prev) => {
      return prev.map((data) => {
        if (data.id === id) data.isSelected = false;
        return data;
      });
    });
  };

  // * Provider *

  return (
    <LogicContext.Provider
      value={{
        ingredientsList,
        effectsList,
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
