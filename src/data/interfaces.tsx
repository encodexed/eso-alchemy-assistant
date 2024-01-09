export interface LogicCtx {
  ingredientsList: IngredientData[];
  effectsList: EffectData[];
  addSelectedIngredient: (id: number) => void;
  removeSelectedIngredient: (id: number) => void;
}

export interface IngredientData {
  id: number;
  name: string;
  effects: string[];
  effectsIDs: number[];
  src: string;
  isSelected: boolean;
}

export interface EffectData {
  id: number;
  name: string;
  counterEffect: number;
  summary: string;
  compatibleEffects: number[];
  reagents: number[];
  hierarchy: number;
  potionName: string;
  poisonName: string;
  potionEffect: string;
  poisonEffect: string;
  src: string;
  assignedColor: string;
  timesPresent: number;
}

export interface IngEffStateObjects {
  ingredients: IngredientData[];
  effects: EffectData[];
}
