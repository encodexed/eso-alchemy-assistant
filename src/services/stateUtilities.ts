import { EffectData, IngredientData } from './interfaces';
import Ingredients from '../data/IngredientsData.json';
import Effects from '../data/EffectsData.json';

export const toggleIngredient = (
  id: number,
  isAdding: boolean,
  effects: EffectData[],
  selections: number[],
) => {
  const newEffects = [...effects];
  const newSelections = [...selections];
  if (isAdding) newSelections.push(id);
  else {
    const index = newSelections.indexOf(id);
    newSelections.splice(index, 1);
  }

  const newEffectIDs = Ingredients.ingredients[id].effectsIDs;
  newEffectIDs.forEach((eID) => {
    if (!isAdding && newEffects[eID].timesPresent >= 1) {
      newEffects[eID].timesPresent--;
    } else newEffects[eID].timesPresent++;
  });

  return { effects: newEffects, selections: newSelections };
};

export const getEffectsList = (selections: number[]): number[] => {
  if (!selections.length) return [];
  return selections.flatMap((iID) => {
    return Ingredients.ingredients[iID].effectsIDs;
  });
};

export const assignColors = (eIDs: number[], hIDs: number[]) => {
  let isIncompatible = true;
  const colors = eIDs.map((eID) => {
    const index = hIDs.indexOf(eID);
    switch (index) {
      case 0:
        isIncompatible = false;
        return 'bg-blue-100 border-2 border-blue-400';
      case 1:
        isIncompatible = false;
        return 'bg-red-100 border-2 border-red-400';
      case 2:
        isIncompatible = false;
        return 'bg-yellow-100 border-2 border-yellow-400';
      case 3:
        isIncompatible = false;
        return 'bg-teal-100 border-2 border-teal-400';
      case 4:
        isIncompatible = false;
        return 'bg-orange-100 border-2 border-orange-400';
      case 5:
        isIncompatible = false;
        return 'bg-green-100 border-2 border-green-400';
      case 6:
        isIncompatible = false;
        return 'bg-purple-100 border-2 border-purple-400';
      case 7:
        isIncompatible = false;
        return 'bg-pink-100 border-2 border-pink-400';
      default:
        return '';
    }
  });

  return { ids: colors, isIncompatible };
};

export const getIcons = (eIDs: number[]) => {
  return eIDs.map((eID) => {
    return Effects.effects[eID].icon;
  });
};

export const getEffectNamesFromIds = (eIDs: number[]) => {
  return eIDs.map((eID) => {
    return Effects.effects[eID].name;
  });
};

export const getIngredientsCompatibleByEffect = (eID: number) => {
  const viable: IngredientData[] = [];
  Ingredients.ingredients.forEach((i) => {
    if (i.effectsIDs.includes(eID)) viable.push(i);
  });
  return viable;
};

export const trimSections = (
  headings: string[],
  ingredients: IngredientData[][],
  colors: string[],
) => {
  const uniqueHeadings: string[] = [];
  const uniqueIngredientSelections: IngredientData[][] = [];
  const uniqueColors: string[] = [];
  headings.forEach((heading, index) => {
    if (!uniqueHeadings.includes(heading)) {
      uniqueHeadings.push(heading);
      uniqueIngredientSelections.push(ingredients[index]);
      uniqueColors.push(colors[index]);
    }
  });

  return {
    headings: uniqueHeadings,
    viable: uniqueIngredientSelections,
    colors: uniqueColors,
  };
};
