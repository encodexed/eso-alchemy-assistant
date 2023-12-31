import Heading from './ui/Heading';

const Ingredient = () => {
  return (
    <div className="flex w-full gap-2 border border-neutral-800 p-2">
      <img
        src="https://placekeanu.com/40/40"
        alt="Ingredient icon"
        className="h-12 w-12"
      />
      <div className="flex w-1/3 items-center">
        <Heading variant="h5">Mountain Flower</Heading>
      </div>
      <div className="flex w-full flex-col p-1">
        <div className="flex">
          <p className="w-1/2 text-sm text-neutral-400">Restore Health</p>
          <p className="w-1/2 text-sm text-neutral-400">
            Increase Armor Resistance
          </p>
        </div>
        <div className="flex">
          <p className="w-1/2 text-sm text-neutral-400">Spell Resist</p>
          <p className="w-1/2 text-sm text-neutral-400">Increase Spell Power</p>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
