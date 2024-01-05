import IngredientsData from '../data/IngredientsData.json';
import IngredientTile from './IngredientTile';
import Heading from './ui/Heading';

const IngredientsList = () => {
  return (
    <>
      <Heading variant="h3" className="text-center">
        Ingredients
      </Heading>
      <div className="flex flex-wrap justify-center border border-black py-1">
        {IngredientsData.ingredients.map((data) => {
          return <IngredientTile data={data} key={`tile: ${data.id}`} />;
        })}
      </div>
    </>
  );
};

export default IngredientsList;
