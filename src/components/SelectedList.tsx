import { useContext } from 'react';
import { LogicContext } from '../context/LogicContext';

const SelectedList = () => {
  const { selectedIngredients } = useContext(LogicContext);

  return (
    <div className="flex flex-col border border-black py-1">
      {selectedIngredients.map((ing) => {
        return <p>{ing.name}</p>;
      })}
    </div>
  );
};

export default SelectedList;
