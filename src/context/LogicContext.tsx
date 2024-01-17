import React, { createContext, useEffect, useState } from 'react';
import ingredientsData from '../data/IngredientsData.json';
import effectsData from '../data/EffectsData.json';
import {
  EffectData,
  IngredientData,
  LogicCtx,
  MatchedEffects,
} from '../services/interfaces';
import {
  getEffectsList,
  getResults,
  toggleIngredient,
} from '../services/stateUtilities';

export const LogicContext = createContext<LogicCtx>({
  ingredientsList: [],
  effectsList: [],
  selections: [],
  effectsPool: [],
  filteringBy: -1,
  results: [],
  toggleSelectedIngredient: () => {},
  applyFilter: () => {},
});

const LogicContextProvider = ({ children }: { children: React.ReactNode }) => {
  // * useStates *
  // Ingredient Data imported from JSON file, converted to state:
  const [ingredientsList, setIngredientsList] = useState<IngredientData[]>([]);

  // Effect Data imported from JSON file, converted to state:
  const [effectsList, setEffectsList] = useState<EffectData[]>([]);

  // Ingredients selected by the user:
  const [selections, setSelections] = useState<number[]>([]);

  // Effects consequently present from the ingredients chosen by the user:
  const [effectsPool, setEffectsPool] = useState<number[]>([]);

  // When no ingredients have been selected, the user is able to filter by an effect:
  const [filteringBy, setFilteringBy] = useState<number>(-1);

  // The results analysis for selected ingredients:
  const [results, setResults] = useState<MatchedEffects[]>([]);

  // * useEffects *
  useEffect(() => {
    // Initialising the ingredientsList state on mount:
    const initIngredientList: IngredientData[] =
      ingredientsData.ingredients.map((data) => {
        return { ...data };
      });
    setIngredientsList(initIngredientList);

    // Initialising the effectsList state on mount:
    const initEffectList: EffectData[] = effectsData.effects.map((data) => {
      return { ...data, timesPresent: 0 };
    });
    setEffectsList(initEffectList);
  }, []);

  useEffect(() => {
    // Updating the effectsPool and filter when selections change:
    const newEffectsList = getEffectsList(selections);
    setEffectsPool(newEffectsList);
    setFilteringBy(-1);
    setResults(getResults(newEffectsList));
  }, [selections]);

  // * Functions *
  const toggleSelectedIngredient = (id: number, isAdding: boolean) => {
    // Users cannot select more than three ingredients:
    if (selections.length >= 3 && isAdding) return;

    // Updating the selections list with the new ingredient, and passing on the number of times subsequent effects are present:
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
        results,
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};

export default LogicContextProvider;
