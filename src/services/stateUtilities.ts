import { EffectData, EffectsColorsObject } from './interfaces';
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

export const getHighlightedEffects = (
  selections: number[],
): EffectsColorsObject | null => {
  if (selections.length === 0) return null;

  const effects =
    Ingredients.ingredients[selections[selections.length - 1]].effectsIDs;

  return {
    blue: effects[0],
    red: effects[1],
    orange: effects[2],
    green: effects[3],
  };
};
