import { useContext } from 'react';
import { LogicContext } from '../context/LogicContext';
import Heading from './ui/Heading';
import IngredientCard from './IngredientCard';

const SelectedList = () => {
  const { ingredientsList, selections } = useContext(LogicContext);

  const subtext = selections.length
    ? 'Tap to remove ingredients'
    : 'Selected ingredients will show up here';

  return (
    <div className="flex h-56 flex-col items-center border border-gray-300 p-1">
      <div className="text-center">
        <Heading variant="h3">Selected Ingredients</Heading>
        <p className="text-sm">{subtext}</p>
      </div>
      <div className="flex w-full flex-col">
        {selections.map((i) => {
          return (
            <IngredientCard
              key={`selected: ${ingredientsList[i].id}`}
              data={ingredientsList[i]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectedList;
