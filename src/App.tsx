import { useContext } from 'react';
import './App.css';
import IngredientsList from './components/IngredientsList';
import Results from './components/Results';
import SelectedList from './components/SelectedList';
import { LogicContext } from './context/LogicContext';
function App() {
  const { selections } = useContext(LogicContext);

  return (
    <>
      <div className="flex flex-col gap-1 p-1">
        <SelectedList />
        {selections.length === 3 ? <Results /> : <IngredientsList />}
      </div>
    </>
  );
}

export default App;
