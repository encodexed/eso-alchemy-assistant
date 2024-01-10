import { EffectData } from './interfaces';
import Ingredients from '../data/IngredientsData.json';

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

export const getHighlightedEffects = (selections: number[]): number[] => {
  if (selections.length === 0) return [];
  return Ingredients.ingredients[selections[selections.length - 1]].effectsIDs;
};

export const assignColors = (eIDs: number[], hIDs: number[]) => {
  let isIncompatible = true;
  const colors = eIDs.map((eID) => {
    const index = hIDs.indexOf(eID);
    switch (index) {
      case 0:
        isIncompatible = false;
        return 'bg-blue-500 border-blue-500';
      case 1:
        isIncompatible = false;
        return 'bg-red-500 border-red-500';
      case 2:
        isIncompatible = false;
        return 'bg-orange-500 border-orange-500';
      case 3:
        isIncompatible = false;
        return 'bg-green-500 border-green-500';
      default:
        return '';
    }
  });

  return { ids: colors, isIncompatible };
};
