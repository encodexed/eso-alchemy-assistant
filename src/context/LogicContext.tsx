import React, { createContext, useEffect, useState } from 'react';
import ingredientsData from '../data/IngredientsData.json';
import effectsData from '../data/EffectsData.json';
import { EffectData, IngredientData, LogicCtx } from '../data/interfaces';
import {
  deselectIngredient,
  getSelectedIngredientsCount,
  selectIngredient,
} from '../services/stateUtilities';

export const LogicContext = createContext<LogicCtx>({
  ingredientsList: [],
  effectsList: [],
  addSelectedIngredient: () => {},
  removeSelectedIngredient: () => {},
});

const LogicContextProvider = ({ children }: { children: React.ReactNode }) => {
  // * useStates *
  const [ingredientsList, setIngredientsList] = useState<IngredientData[]>([]);
  const [effectsList, setEffectsList] = useState<EffectData[]>([]);

  // * useEffects *
  useEffect(() => {
    const initIngredientList: IngredientData[] =
      ingredientsData.ingredients.map((data) => {
        return { ...data, isSelected: false };
      });
    setIngredientsList(initIngredientList);

    const initEffectList: EffectData[] = effectsData.effects.map((data) => {
      return { ...data, assignedColor: 'none', timesPresent: 0 };
    });
    setEffectsList(initEffectList);
  }, []);

  // * Functions *
  const addSelectedIngredient = (id: number) => {
    // Check to see if maximum number of ingredients has been reached
    if (getSelectedIngredientsCount(ingredientsList) >= 3) return;

    // Clone ingredients list to modify it
    const newIngredientsList = [...ingredientsList];
    const newEffectsList = [...effectsList];
    const newState = selectIngredient(id, newIngredientsList, newEffectsList);
    setIngredientsList(newState.ingredients);
    setEffectsList(newState.effects);
  };

  const removeSelectedIngredient = (id: number) => {
    // Check to see if maximum number of ingredients has been reached
    if (getSelectedIngredientsCount(ingredientsList) < 0) return;

    // Clone ingredients list to modify it
    const newIngredientsList = [...ingredientsList];
    const newEffectsList = [...effectsList];
    const newState = deselectIngredient(id, newIngredientsList, newEffectsList);
    setIngredientsList(newState.ingredients);
    setEffectsList(newState.effects);
  };

  // * Provider *

  return (
    <LogicContext.Provider
      value={{
        ingredientsList,
        effectsList,
        addSelectedIngredient,
        removeSelectedIngredient,
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};

export default LogicContextProvider;
