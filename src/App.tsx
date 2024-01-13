import './App.css';
import IngredientsList from './components/IngredientsList';
import SelectedList from './components/SelectedList';
function App() {
  return (
    <>
      <div className="flex flex-col gap-1 p-1">
        <SelectedList />
        <IngredientsList />
      </div>
    </>
  );
}

export default App;
