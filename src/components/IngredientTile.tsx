import { useContext, useEffect, useState } from 'react';
import { LogicContext } from '../context/LogicContext';
import { IngredientData } from '../services/interfaces';
import { assignColors } from '../services/stateUtilities';

interface Props {
  data: IngredientData;
}

const initColors = ['', '', '', ''];

const IngredientTile = ({ data }: Props) => {
  const [colors, setColors] = useState<string[]>(initColors);
  const [isCompatible, setCompatible] = useState<boolean>(true);
  const { selections, toggleSelectedIngredient, highlightedEffects } =
    useContext(LogicContext);
  const { id, name, src, effectsIDs } = data;
  const isSelected = selections.includes(data.id);

  useEffect(() => {
    // Setting the colors displayed at the bottom of the tile
    const colors = assignColors(effectsIDs, highlightedEffects);
    if (
      highlightedEffects.length === 0 ||
      (selections.length >= 3 && !selections.includes(id))
    ) {
      setColors(initColors);
    } else {
      setColors(colors.ids);
    }

    // Deciding whether or not the tile should be interactive/grayed out
    if (selections.length === 0 || selections.includes(id)) setCompatible(true);
    else setCompatible(!colors.isIncompatible);
  }, [highlightedEffects, effectsIDs, selections, id]);

  let classes =
    'm-1 flex h-[104px] w-24 cursor-pointer flex-col items-center rounded-sm border border-gray-200 p-1 shadow-sm hover:shadow-md';

  const clickHandler = () => {
    toggleSelectedIngredient(id, !isSelected);
  };

  if (selections.length >= 3 && !selections.includes(id)) return <></>;

  if (!isCompatible) {
    return (
      <div className={`${classes} opacity-40`} onClick={clickHandler}>
        <div className="h-1/2">
          <img className="h-full w-auto" src={src} alt={`${name} icon`} />
        </div>

        <div className="flex h-1/3 items-end">
          <p className="overflow-clip text-center text-xs font-bold">{name}</p>
        </div>

        <div className="flex h-1/6 items-center gap-1">
          <div
            className={`h-[10px] w-[10px] rounded-full border border-gray-300 ${colors[0]}`}
          ></div>
          <div
            className={`h-[10px] w-[10px] rounded-full border border-gray-300 ${colors[1]}`}
          ></div>
          <div
            className={`h-[10px] w-[10px] rounded-full border border-gray-300 ${colors[2]}`}
          ></div>
          <div
            className={`h-[10px] w-[10px] rounded-full border border-gray-300 ${colors[3]}`}
          ></div>
        </div>
      </div>
    );
  }

  if (selections.includes(data.id)) {
    classes =
      'm-1 flex h-[104px] w-24 cursor-pointer flex-col items-center rounded-sm border-2 border-green-300 p-1 shadow-md hover:border-red-300';
  }

  return (
    <div className={classes} onClick={clickHandler}>
      <div className="h-1/2">
        <img className="h-full w-auto" src={src} alt={`${name} icon`} />
      </div>

      <div className="flex h-1/3 items-end">
        <p className="overflow-clip text-center text-xs font-bold">{name}</p>
      </div>

      <div className="flex h-1/6 items-center gap-1">
        <div
          className={`h-[10px] w-[10px] rounded-full border border-gray-300 ${colors[0]}`}
        ></div>
        <div
          className={`h-[10px] w-[10px] rounded-full border border-gray-300 ${colors[1]}`}
        ></div>
        <div
          className={`h-[10px] w-[10px] rounded-full border border-gray-300 ${colors[2]}`}
        ></div>
        <div
          className={`h-[10px] w-[10px] rounded-full border border-gray-300 ${colors[3]}`}
        ></div>
      </div>
    </div>
  );
};

export default IngredientTile;
