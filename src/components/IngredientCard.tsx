import { useContext, useEffect, useState } from 'react';
import { LogicContext } from '../context/LogicContext';
import { IngredientData } from '../services/interfaces';
import { getCardEffectColors, getIcons } from '../services/stateUtilities';
interface Props {
  data: IngredientData;
}

const IngredientCard = ({ data }: Props) => {
  const { effects, src, id, effectsIDs } = data;
  const { toggleSelectedIngredient, selections, results } =
    useContext(LogicContext);
  const [effectColors, setEffectColors] = useState<string[]>([]);
  const [effectIcons, setEffectIcons] = useState<string[]>([]);

  useEffect(() => {
    setEffectColors(getCardEffectColors(id, selections, results));
    setEffectIcons(getIcons(effectsIDs));
  }, [id, selections, results, effectsIDs]);

  const clickHandler = () => {
    toggleSelectedIngredient(data.id, false);
  };

  return (
    <div
      onClick={clickHandler}
      className="my-0.5 flex w-full cursor-pointer items-center gap-1 border border-gray-200 bg-white py-1 shadow-sm hover:border-red-400 hover:shadow-md hover:shadow-red-200"
    >
      <div className="h-8 w-[10%]">
        <img src={src} alt="Ingredient icon" className="w-8" />
      </div>
      <div className="flex w-[45%] flex-col text-xs">
        <div className="flex items-center gap-0.5">
          <img
            className="h-3 w-3"
            src={effectIcons[0]}
            alt={`${effects[0]} icon card`}
          />
          <p className={effectColors[0]}>{effects[0]}</p>
        </div>
        <div className="flex items-center gap-0.5">
          <img
            className="h-3 w-3"
            src={effectIcons[1]}
            alt={`${effects[1]} icon card`}
          />
          <p className={effectColors[1]}>{effects[1]}</p>
        </div>
      </div>
      <div className="flex w-[45%] flex-col text-xs">
        <div className="flex items-center gap-0.5">
          <img
            className="h-3 w-3"
            src={effectIcons[2]}
            alt={`${effects[2]} icon card`}
          />
          <p className={effectColors[2]}>{effects[2]}</p>
        </div>
        <div className="flex items-center gap-0.5">
          <img
            className="h-3 w-3"
            src={effectIcons[3]}
            alt={`${effects[3]} icon card`}
          />
          <p className={effectColors[3]}>{effects[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientCard;
