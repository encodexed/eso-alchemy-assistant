import './App.css';
import Button from './components/ui/Button';

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">Hello World</h1>
      <div className="mt-2 flex gap-1">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="caution">Caution</Button>
        <Button variant="gradient">Gradient</Button>
      </div>
    </div>
  );
}

export default App;
