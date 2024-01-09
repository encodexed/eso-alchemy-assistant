import {
  EffectData,
  IngEffStateObjects,
  IngredientData,
} from '../data/interfaces';

export const getSelectedIngredientsList = (ingredients: IngredientData[]) => {
  return ingredients.filter((i) => i.isSelected);
};

export const getSelectedIngredientsCount = (ingredients: IngredientData[]) => {
  return ingredients.filter((i) => i.isSelected).length;
};

export const selectIngredient = (
  id: number,
  ingredients: IngredientData[],
  effects: EffectData[],
): IngEffStateObjects => {
  const ingredient = ingredients[id];
  // Mark ingredient as selected in Ingredients array
  ingredient.isSelected = true;

  // Mark ingredient's effects with +1 presence in Effects array
  const newEffectIDs = ingredient.effectsIDs;
  newEffectIDs.forEach((eID) => {
    effects[eID].timesPresent++;
  });

  return { ingredients, effects };
};

export const deselectIngredient = (
  id: number,
  ingredients: IngredientData[],
  effects: EffectData[],
): IngEffStateObjects => {
  const ingredient = ingredients[id];
  // Un-mark ingredient as selected in Ingredients array
  ingredient.isSelected = false;

  // Mark ingredient's effects with -1 presence in Effects array
  const newEffectIDs = ingredient.effectsIDs;
  newEffectIDs.forEach((eID) => {
    if (effects[eID].timesPresent >= 1) {
      effects[eID].timesPresent--;
    }
  });
  return { ingredients, effects };
};
