import { EffectData } from '../data/interfaces';
import Ingredients from '../data/IngredientsData.json';

// export const selectIngredient = (
//   id: number,
//   effects: EffectData[],
//   selections: number[],
// ) => {
//   // Add ingredient to selections
//   selections.push(id);

//   // Mark ingredient's effects with +1 presence in Effects array
//   const newEffectIDs = Ingredients.ingredients[id].effectsIDs;
//   newEffectIDs.forEach((eID) => {
//     effects[eID].timesPresent++;
//   });

//   return { effects, selections };
// };

// export const deselectIngredient = (
//   id: number,
//   effects: EffectData[],
//   selections: number[],
// ) => {
//   // Remove ingredient from selections
//   const index = selections.indexOf(id);
//   selections.splice(index, 1);

//   // Mark ingredient's effects with -1 presence in Effects array
//   const newEffectIDs = Ingredients.ingredients[id].effectsIDs;
//   newEffectIDs.forEach((eID) => {
//     if (effects[eID].timesPresent >= 1) {
//       effects[eID].timesPresent--;
//     }
//   });
//   return { effects, selections };
// };

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
