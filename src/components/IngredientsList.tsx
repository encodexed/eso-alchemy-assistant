import { useContext } from 'react';
import IngredientTile from './IngredientTile';
import Heading from './ui/Heading';
import { LogicContext } from '../context/LogicContext';

const IngredientsList = () => {
  const { ingredientsList, selections } = useContext(LogicContext);

  // if (!selections.length) {
  return (
    <div className="border border-black py-1">
      <Heading variant="h3" className="text-center">
        Ingredients
      </Heading>
      <div className="flex flex-wrap justify-center">
        {ingredientsList.map((data) => {
          return <IngredientTile data={data} key={`tile: ${data.id}`} />;
        })}
      </div>
    </div>
  );
  // }
};

export default IngredientsList;

/**
 * * With zero ingredients selected, should display the list alphabetically, unless filtered by effect.
 * ? With one or two ingredients selected, should display the list in four parts, separated with headers by each effect of the last selected ingredient.
 * % With three ingredients selected, back to alphabetical with selected ingredients at the top, or a results screen
 */
