import { useContext } from 'react';
import IngredientsList from './components/IngredientsList';
import Results from './components/Results';
import SelectedList from './components/SelectedList';
import { LogicContext } from './context/LogicContext';
import Instructions from './components/Instructions';
function App() {
  const { selections } = useContext(LogicContext);

  return (
    <>
      <div className="flex flex-col gap-1 p-1">
        <SelectedList />
        {selections.length === 3 ? (
          <>
            <Instructions />
            <Results />
          </>
        ) : (
          <IngredientsList />
        )}
      </div>
    </>
  );
}

export default App;
