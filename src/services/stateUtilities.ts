import { EffectData } from '../data/interfaces';
import Ingredients from '../data/IngredientsData.json';

export const toggleIngredient = (
  id: number,
  isAdding: boolean,
  effects: EffectData[],
  selections: number[],
) => {
  if (isAdding) selections.push(id);
  else {
    const index = selections.indexOf(id);
    selections.splice(index, 1);
  }

  const newEffectIDs = Ingredients.ingredients[id].effectsIDs;
  newEffectIDs.forEach((eID) => {
    if (!isAdding && effects[eID].timesPresent >= 1) {
      effects[eID].timesPresent--;
    } else effects[eID].timesPresent++;
  });

  return { effects, selections };
};
