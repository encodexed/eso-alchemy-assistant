export interface LogicCtx {
  ingredientsList: IngredientData[];
  effectsList: EffectData[];
  selections: number[];
  effectsPool: number[];
  filteringBy: number;
  results: MatchedEffects[];
  toggleSelectedIngredient: (id: number, isAdding: boolean) => void;
  applyFilter: (id: number) => void;
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

export interface MatchedEffects {
  effect: string;
  id: number;
  potionHtml: string;
  poisonHtml: string;
  timesPresent: number;
  counterId: number;
  isCountered: boolean;
}
