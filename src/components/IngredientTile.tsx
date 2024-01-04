import { useState } from 'react';

interface Props {
  data: IngredientData;
}

export interface IngredientData {
  name: string;
  effect1: string;
  effect2: string;
  effect3: string;
  effect4: string;
  src: string;
}

const IngredientTile = ({ data }: Props) => {
  const [isSelected, setSelected] = useState(false);
  const { name, src } = data;

  let classes =
    'm-1 flex h-24 w-24 cursor-pointer flex-col items-center rounded-sm border border-gray-200 p-1 shadow-sm hover:shadow-md';

  if (isSelected) {
    classes =
      'm-1 flex h-24 w-24 cursor-pointer flex-col items-center rounded-sm border-2 border-green-300 p-1 shadow-md hover:border-red-300';
  }

  const clickHandler = () => {
    setSelected(!isSelected);
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
