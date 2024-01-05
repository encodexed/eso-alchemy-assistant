import { useContext } from 'react';
import { LogicContext } from '../context/LogicContext';
import Heading from './ui/Heading';
import IngredientCard from './IngredientCard';

const SelectedList = () => {
  const { selectedIngredients } = useContext(LogicContext);

  return (
    <div className="flex h-48 flex-col gap-2 border border-black py-1">
      <Heading variant="h3" className="text-center">
        Selected Ingredients
      </Heading>
      <div className="flex flex-col">
        {selectedIngredients.map((ing) => {
          return <IngredientCard data={ing} />;
        })}
      </div>
    </div>
  );
};

export default SelectedList;
