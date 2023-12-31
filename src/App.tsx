import './App.css';
import IngredientsList from './components/IngredientsList';
function App() {
  return (
    <>
      <div className="flex flex-col gap-1 p-1">
        <IngredientsList />
      </div>
    </>
  );
}

export default App;
