import './App.css';
import Ingredient from './components/Ingredient';
function App() {
  return (
    <>
      <div className="flex flex-col gap-1 p-1">
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </div>
    </>
  );
}

export default App;
