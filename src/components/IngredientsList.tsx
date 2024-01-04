import IngredientsData from '../data/IngredientsData.json';
import IngredientTile from './IngredientTile';

const IngredientsList = () => {
  return (
    <div className="flex flex-wrap justify-center border border-black py-1">
      {IngredientsData.ingredients.map((data) => {
        return <IngredientTile data={data} key={`tile: ${data.id}`} />;
      })}
    </div>
  );
};

export default IngredientsList;
