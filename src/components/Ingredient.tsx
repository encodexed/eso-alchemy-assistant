interface Props {
  data: IngredientData;
}

export interface IngredientData {
  name: string;
  effect1: string;
  effect2: string;
  effect3: string;
  effect4: string;
}

const Ingredient = ({ data }: Props) => {
  const { name, effect1, effect2, effect3, effect4 } = data;
  return (
    <div className="flex w-full gap-2 border border-neutral-800 p-2">
      <img
        src="https://placekeanu.com/40/40"
        alt="Ingredient icon"
        className="h-12 w-12"
      />
      <div className="flex w-1/3 items-center">
        <p className="font-bold">{name}</p>
      </div>
      <div className="flex w-full flex-col p-1">
        <div className="flex">
          <p className="w-1/2 text-sm text-neutral-400">{effect1}</p>
          <p className="w-1/2 text-sm text-neutral-400">{effect2}</p>
        </div>
        <div className="flex">
          <p className="w-1/2 text-sm text-neutral-400">{effect3}</p>
          <p className="w-1/2 text-sm text-neutral-400">{effect4}</p>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
