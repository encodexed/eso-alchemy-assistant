import { useContext } from 'react';
import { LogicContext } from '../context/LogicContext';
import { IngredientData } from '../services/interfaces';
interface Props {
  data: IngredientData;
}

const IngredientCard = ({ data }: Props) => {
  const { effects, src, id } = data;
  const { toggleSelectedIngredient, selections } = useContext(LogicContext);

  const clickHandler = () => {
    toggleSelectedIngredient(data.id, false);
  };

  let effect1 = ' text-gray-400';
  let effect2 = ' text-gray-400';
  let effect3 = ' text-gray-400';
  let effect4 = ' text-gray-400';

  if (id === selections[selections.length - 1]) {
    effect1 = ' text-blue-500';
    effect2 = ' text-red-500';
    effect3 = ' text-orange-500';
    effect4 = ' text-green-500';
  }

  return (
    <div
      onClick={clickHandler}
      className="m-1 flex w-full cursor-pointer items-center gap-2 border-2 border-gray-200 py-1 shadow-sm hover:border-red-200 hover:shadow-md"
    >
      <div className="mr-1 h-10">
        <img src={src} alt="Ingredient icon" className="w-10" />
      </div>
      <div className="flex w-2/5 flex-col text-xs">
        <p className={`font-semibold${effect1}`}>{effects[0]}</p>
        <p className={`font-semibold${effect2}`}>{effects[1]}</p>
      </div>
      <div className="flex w-2/5 flex-col text-xs">
        <p className={`font-semibold${effect3}`}>{effects[2]}</p>
        <p className={`font-semibold${effect4}`}>{effects[3]}</p>
      </div>
    </div>
  );
};

export default IngredientCard;
