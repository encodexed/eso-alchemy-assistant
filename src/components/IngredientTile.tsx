import { useContext, useEffect, useState } from 'react';
import { LogicContext } from '../context/LogicContext';
import { IngredientData } from '../services/interfaces';
import { assignColors, getIcons } from '../services/stateUtilities';

interface Props {
  data: IngredientData;
}

const initState = ['', '', '', ''];

const IngredientTile = ({ data }: Props) => {
  const [colors, setColors] = useState<string[]>(initState);
  const [icons, setIcons] = useState<string[]>(initState);
  const { selections, toggleSelectedIngredient, effectsPool } =
    useContext(LogicContext);
  const { id, name, src, effectsIDs } = data;
  const isSelected = selections.includes(data.id);

  useEffect(() => {
    // Setting the colors displayed at the bottom of the tile
    const colors = assignColors(effectsIDs, effectsPool);
    if (
      effectsPool.length === 0 ||
      (selections.length >= 3 && !selections.includes(id))
    ) {
      setColors(initState);
    } else setColors(colors.ids);
  }, [effectsPool, effectsIDs, selections, id]);

  useEffect(() => {
    setIcons(getIcons(data.effectsIDs));
  }, [data.effectsIDs]);

  const clickHandler = () => {
    toggleSelectedIngredient(id, !isSelected);
  };

  return (
    <div
      className="m-0.5 flex h-[104px] w-24 cursor-pointer flex-col items-center rounded-sm border border-gray-200 bg-white p-1 shadow-sm hover:border-gray-300 hover:shadow-md"
      onClick={clickHandler}
    >
      <div className="h-1/2">
        <img className="h-full w-auto" src={src} alt={`${name} icon`} />
      </div>

      <div className="flex h-1/3 items-center">
        <p className="overflow-clip text-center text-xs font-bold">{name}</p>
      </div>

      <div className="flex h-1/6 items-center gap-1">
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full ${
            colors[0] || 'border border-gray-200'
          }`}
        >
          <img className="h-3 w-3" src={icons[0]} alt="An icon" />
        </div>
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full ${
            colors[1] || 'border border-gray-200'
          }`}
        >
          <img className="h-3 w-3" src={icons[1]} alt="An icon" />
        </div>
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full ${
            colors[2] || 'border border-gray-200'
          }`}
        >
          <img className="h-3 w-3" src={icons[2]} alt="An icon" />
        </div>
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full ${
            colors[3] || 'border border-gray-200'
          }`}
        >
          <img className="h-3 w-3" src={icons[3]} alt="An icon" />
        </div>
      </div>
    </div>
  );
};

export default IngredientTile;
