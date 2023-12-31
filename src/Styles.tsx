import Button from './components/ui/Button';
import Heading from './components/ui/Heading';

function Styles() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold">Headings</h2>
      <div className="mt-2 flex-col gap-1">
        <Heading variant="h1">This is a H1</Heading>
        <Heading variant="h2">This is a H2</Heading>
        <Heading variant="h3">This is a H3</Heading>
        <Heading variant="h4">This is a H4</Heading>
        <Heading variant="h5">This is a H5</Heading>
        <Heading variant="h6">This is a H6</Heading>
      </div>
      <h2 className="text-2xl font-semibold">Buttons</h2>
      <div className="mt-2 flex gap-1">
        <Button size="lg" variant="primary">
          Primary
        </Button>
        <Button size="lg" variant="secondary">
          Secondary
        </Button>
        <Button size="lg" variant="danger">
          Danger
        </Button>
        <Button size="lg" variant="caution">
          Caution
        </Button>
        <Button size="lg" variant="gradient">
          Gradient
        </Button>
      </div>
      <div className="mt-2 flex gap-1">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="caution">Caution</Button>
        <Button variant="gradient">Gradient</Button>
      </div>
      <div className="mt-2 flex gap-1">
        <Button size="sm" variant="primary">
          Primary
        </Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="danger">
          Danger
        </Button>
        <Button size="sm" variant="caution">
          Caution
        </Button>
        <Button size="sm" variant="gradient">
          Gradient
        </Button>
      </div>
    </div>
  );
}

export default Styles;
