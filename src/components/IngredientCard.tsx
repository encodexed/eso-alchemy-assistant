import { useContext } from 'react';
import { IngredientData } from './IngredientTile';
import { LogicContext } from '../context/LogicContext';
interface Props {
  data: IngredientData;
}

const IngredientCard = ({ data }: Props) => {
  const { effect1, effect2, effect3, effect4, src } = data;
  const { removeSelectedIngredient } = useContext(LogicContext);

  const clickHandler = () => {
    removeSelectedIngredient(data.id);
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
        <p>{effect1}</p>
        <p>{effect2}</p>
      </div>
      <div className="flex w-2/5 flex-col text-xs">
        <p>{effect3}</p>
        <p>{effect4}</p>
      </div>
    </div>
  );
};

export default IngredientCard;
