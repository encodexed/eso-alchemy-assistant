import IngredientsData from '../data/IngredientsData.json';
import Ingredient from './Ingredient';

const IngredientsList = () => {
  return (
    <>
      {IngredientsData.ingredients.map((data) => {
        return <Ingredient data={data} />;
      })}
    </>
  );
};

export default IngredientsList;
