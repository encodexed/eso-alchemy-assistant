import ingredientsData from '../data/IngredientsData.json';
import Ingredient from './Ingredient';

const IngredientsList = () => {
  return (
    <>
      {ingredientsData.ingredients.map((data) => {
        return <Ingredient data={data} />;
      })}
    </>
  );
};

export default IngredientsList;
