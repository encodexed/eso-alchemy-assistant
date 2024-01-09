import { useContext } from 'react';
import { LogicContext } from '../context/LogicContext';
import { IngredientData } from '../data/interfaces';

interface Props {
  data: IngredientData;
}

const IngredientTile = ({ data }: Props) => {
  const { selections, toggleSelectedIngredient } = useContext(LogicContext);
  const { id, name, src } = data;
  const isSelected = selections.includes(data.id);

  let classes =
    'm-1 flex h-[104px] w-24 cursor-pointer flex-col items-center rounded-sm border border-gray-200 p-1 shadow-sm hover:shadow-md';

  if (selections.includes(data.id)) {
    classes =
      'm-1 flex h-[104px] w-24 cursor-pointer flex-col items-center rounded-sm border-2 border-green-300 p-1 shadow-md hover:border-red-300';
  }

  const clickHandler = () => {
    toggleSelectedIngredient(id, !isSelected);
  };

  return (
    <div className={classes} onClick={clickHandler}>
      <div className="h-1/2">
        <img className="h-full w-auto" src={src} alt={`${name} icon`}></img>
      </div>

      <div className="flex h-1/3 items-end">
        <p className="overflow-clip text-center text-xs font-bold">{name}</p>
      </div>

      <div className="flex h-1/6 items-center gap-1">
        <div className="h-[10px] w-[10px] rounded-full border border-gray-300"></div>
        <div className="h-[10px] w-[10px] rounded-full border border-gray-300"></div>
        <div className="h-[10px] w-[10px] rounded-full border border-gray-300"></div>
        <div className="h-[10px] w-[10px] rounded-full border border-gray-300"></div>
      </div>
    </div>
  );
};

export default IngredientTile;
