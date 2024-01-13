import React, { createContext, useEffect, useState } from 'react';
import ingredientsData from '../data/IngredientsData.json';
import effectsData from '../data/EffectsData.json';
import { EffectData, IngredientData, LogicCtx } from '../services/interfaces';
import { getEffectsList, toggleIngredient } from '../services/stateUtilities';

export const LogicContext = createContext<LogicCtx>({
  ingredientsList: [],
  effectsList: [],
  selections: [],
  effectsPool: [],
  filteringBy: -1,
  toggleSelectedIngredient: () => {},
  applyFilter: () => {},
});

const LogicContextProvider = ({ children }: { children: React.ReactNode }) => {
  // * useStates *
  const [ingredientsList, setIngredientsList] = useState<IngredientData[]>([]);
  const [effectsList, setEffectsList] = useState<EffectData[]>([]);
  const [selections, setSelections] = useState<number[]>([]);
  const [effectsPool, setEffectsPool] = useState<number[]>([]);
  const [filteringBy, setFilteringBy] = useState<number>(-1);

  // * useEffects *
  useEffect(() => {
    const initIngredientList: IngredientData[] =
      ingredientsData.ingredients.map((data) => {
        return { ...data };
      });
    setIngredientsList(initIngredientList);

    const initEffectList: EffectData[] = effectsData.effects.map((data) => {
      return { ...data, timesPresent: 0 };
    });
    setEffectsList(initEffectList);
  }, []);

  useEffect(() => {
    setEffectsPool(getEffectsList(selections));
  }, [selections]);

  // * Functions *
  const toggleSelectedIngredient = (id: number, isAdding: boolean) => {
    if (selections.length >= 3 && isAdding) return;

    const newEffectsList = [...effectsList];
    const newState = toggleIngredient(id, isAdding, newEffectsList, selections);
    setEffectsList(newState.effects);
    setSelections(newState.selections);
  };

  const applyFilter = (id: number) => {
    setFilteringBy(id);
  };

  // * Provider *
  return (
    <LogicContext.Provider
      value={{
        ingredientsList,
        effectsList,
        selections,
        effectsPool,
        filteringBy,
        toggleSelectedIngredient,
        applyFilter,
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};

export default LogicContextProvider;
