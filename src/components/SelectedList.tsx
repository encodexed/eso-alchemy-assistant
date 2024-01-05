import { useContext } from 'react';
import { LogicContext } from '../context/LogicContext';
import Heading from './ui/Heading';
import IngredientCard from './IngredientCard';

const SelectedList = () => {
  const { selectedIngredients } = useContext(LogicContext);

  return (
    <div className="flex h-56 flex-col border border-black p-1 pr-3">
      <Heading variant="h3" className="text-center">
        Selected Ingredients
      </Heading>
      <div className="flex flex-col">
        {selectedIngredients.map((data) => {
          return <IngredientCard key={`selected: ${data.id}`} data={data} />;
        })}
      </div>
    </div>
  );
};

export default SelectedList;
