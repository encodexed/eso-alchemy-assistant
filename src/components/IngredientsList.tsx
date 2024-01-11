import { useContext } from 'react';
import IngredientTile from './IngredientTile';
import Heading from './ui/Heading';
import { LogicContext } from '../context/LogicContext';

const IngredientsList = () => {
  const { ingredientsList } = useContext(LogicContext);

  return (
    <>
      <Heading variant="h3" className="text-center">
        Ingredients
      </Heading>
      <div className="flex flex-wrap justify-center border border-black py-1">
        {ingredientsList.map((data) => {
          return <IngredientTile data={data} key={`tile: ${data.id}`} />;
        })}
      </div>
    </>
  );
};

export default IngredientsList;
