export interface LogicCtx {
  ingredientsList: IngredientData[];
  effectsList: EffectData[];
  selections: number[];
  highlightedEffects: number[];
  toggleSelectedIngredient: (id: number, isAdding: boolean) => void;
}

export interface IngredientData {
  id: number;
  name: string;
  effects: string[];
  effectsIDs: number[];
  src: string;
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
  timesPresent: number;
}
