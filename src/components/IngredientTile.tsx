import { useContext } from 'react';
import { LogicContext } from '../context/LogicContext';

interface Props {
  data: IngredientData;
}

export interface IngredientData {
  id: number;
  name: string;
  effects: string[];
  effectsIDs: number[];
  src: string;
  isSelected: boolean;
}

const IngredientTile = ({ data }: Props) => {
  const { addSelectedIngredient, removeSelectedIngredient } =
    useContext(LogicContext);
  const { id, name, src, isSelected } = data;

  let classes =
    'm-1 flex h-24 w-24 cursor-pointer flex-col items-center rounded-sm border border-gray-200 p-1 shadow-sm hover:shadow-md';

  if (isSelected) {
    classes =
      'm-1 flex h-24 w-24 cursor-pointer flex-col items-center rounded-sm border-2 border-green-300 p-1 shadow-md hover:border-red-300';
  }

  const clickHandler = () => {
    if (!isSelected) addSelectedIngredient(data);
    else removeSelectedIngredient(id);
  };

  return (
    <div className={classes} onClick={clickHandler}>
      <div className="h-2/3">
        <img className="h-full w-auto" src={src} alt={`${name} icon`}></img>
      </div>

      <div className="flex h-1/3 items-end">
        <p className="overflow-clip text-center text-xs font-bold">{name}</p>
      </div>
    </div>
  );
};

export default IngredientTile;
