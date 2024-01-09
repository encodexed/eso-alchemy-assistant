import React, { createContext, useEffect, useState } from 'react';
import ingredientsData from '../data/IngredientsData.json';
import effectsData from '../data/EffectsData.json';
import { EffectData, IngredientData, LogicCtx } from '../data/interfaces';
import { toggleIngredient } from '../services/stateUtilities';

export const LogicContext = createContext<LogicCtx>({
  ingredientsList: [],
  effectsList: [],
  selections: [],
  toggleSelectedIngredient: () => {},
});

const LogicContextProvider = ({ children }: { children: React.ReactNode }) => {
  // * useStates *
  const [ingredientsList, setIngredientsList] = useState<IngredientData[]>([]);
  const [effectsList, setEffectsList] = useState<EffectData[]>([]);
  const [selections, setSelections] = useState<number[]>([]);

  // * useEffects *
  useEffect(() => {
    const initIngredientList: IngredientData[] =
      ingredientsData.ingredients.map((data) => {
        return { ...data };
      });
    setIngredientsList(initIngredientList);

    const initEffectList: EffectData[] = effectsData.effects.map((data) => {
      return { ...data, assignedColor: 'none', timesPresent: 0 };
    });
    setEffectsList(initEffectList);
  }, []);

  // * Functions *

  const toggleSelectedIngredient = (id: number, isAdding: boolean) => {
    if (selections.length >= 3 && isAdding) return;
    const newEffectsList = [...effectsList];
    const newState = toggleIngredient(id, isAdding, newEffectsList, selections);
    setEffectsList(newState.effects);
    setSelections(newState.selections);
  };

  // * Provider *
  return (
    <LogicContext.Provider
      value={{
        ingredientsList,
        effectsList,
        selections,
        toggleSelectedIngredient,
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};

export default LogicContextProvider;
