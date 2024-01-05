import { IngredientData } from './IngredientTile';
interface Props {
  data: IngredientData;
}

const IngredientCard = ({ data }: Props) => {
  const { effect1, effect2, effect3, effect4, src } = data;

  return (
    <div className="flex w-full items-center gap-2 border-t border-black py-1">
      <div className="h-10 w-1/5">
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
