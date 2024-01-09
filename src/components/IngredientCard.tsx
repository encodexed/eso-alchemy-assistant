import { useContext } from 'react';
import { LogicContext } from '../context/LogicContext';
import { IngredientData } from '../data/interfaces';
interface Props {
  data: IngredientData;
}

const IngredientCard = ({ data }: Props) => {
  const { effects, src } = data;
  const { toggleSelectedIngredient } = useContext(LogicContext);

  const clickHandler = () => {
    toggleSelectedIngredient(data.id, false);
  };

  return (
    <div
      onClick={clickHandler}
      className="m-1 flex w-full cursor-pointer items-center gap-2 border-2 border-gray-200 py-1 shadow-sm hover:border-red-200 hover:shadow-md"
    >
      <div className="mr-1 h-10">
        <img src={src} alt="Ingredient icon" className="w-10" />
      </div>
      <div className="flex w-2/5 flex-col text-xs">
        <p className="font-semibold">{effects[0]}</p>
        <p className="font-semibold">{effects[1]}</p>
      </div>
      <div className="flex w-2/5 flex-col text-xs">
        <p className="font-semibold">{effects[2]}</p>
        <p className="font-semibold">{effects[3]}</p>
      </div>
    </div>
  );
};

export default IngredientCard;
