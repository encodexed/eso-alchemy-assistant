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
      setColors(initState);
    } else {
      setColors(colors.ids);
    }

    // Deciding whether or not the tile should be interactive/grayed out
    if (!selections.length || selections.includes(id)) setCompatible(true);
    else setCompatible(!colors.isIncompatible);
  }, [highlightedEffects, effectsIDs, selections, id]);

  useEffect(() => {
    setIcons(getIcons(data.effectsIDs));
  }, [data.effectsIDs]);

  let classes =
    'm-1 flex h-[104px] w-24 cursor-pointer flex-col items-center rounded-sm border border-gray-200 p-1 shadow-sm hover:shadow-md';

  const clickHandler = () => {
    toggleSelectedIngredient(id, !isSelected);
  };

  if (!isCompatible || (selections.length >= 3 && !selections.includes(id))) {
    return (
      <div className={`${classes} opacity-40`} onClick={clickHandler}>
        <div className="h-1/2">
          <img className="h-full w-auto" src={src} alt={`${name} icon`} />
        </div>

        <div className="flex h-1/3 items-center">
          <p className="overflow-clip text-center text-xs font-bold">{name}</p>
        </div>

        <div className="flex h-1/6 items-center gap-1">
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 ${colors[0]}`}
          >
            <img className="h-3 w-3" src={icons[0]} alt="An icon" />
          </div>
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 ${colors[1]}`}
          >
            <img className="h-3 w-3" src={icons[1]} alt="An icon" />
          </div>
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 ${colors[2]}`}
          >
            <img className="h-3 w-3" src={icons[2]} alt="An icon" />
          </div>
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 ${colors[3]}`}
          >
            <img className="h-3 w-3" src={icons[3]} alt="An icon" />
          </div>
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

      <div className="flex h-1/3 items-center">
        <p className="overflow-clip text-center text-xs font-bold">{name}</p>
      </div>

      <div className="flex h-1/6 items-center gap-1">
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 ${colors[0]}`}
        >
          <img className="h-3 w-3" src={icons[0]} alt="An icon" />
        </div>
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 ${colors[1]}`}
        >
          <img className="h-3 w-3" src={icons[1]} alt="An icon" />
        </div>
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 ${colors[2]}`}
        >
          <img className="h-3 w-3" src={icons[2]} alt="An icon" />
        </div>
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 ${colors[3]}`}
        >
          <img className="h-3 w-3" src={icons[3]} alt="An icon" />
        </div>
      </div>
    </div>
  );
};

export default IngredientTile;
