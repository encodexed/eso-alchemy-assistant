interface Props {
  data: IngredientData;
}

export interface IngredientData {
  name: string;
  effect1: string;
  effect2: string;
  effect3: string;
  effect4: string;
  src: string;
}

const Ingredient = ({ data }: Props) => {
  const { name, effect1, effect2, effect3, effect4, src } = data;

  return (
    <div className="flex w-full border border-neutral-800 px-2 shadow-sm hover:cursor-pointer hover:bg-green-100 hover:shadow-md">
      <div className="flex w-2/3 justify-start gap-2">
        <div className="h-max">
          <img src={src} alt="Ingredient icon" className="h-full w-auto" />
        </div>
        <div className="flex items-center">
          <p className="font-bold">{name}</p>
        </div>
      </div>
      <div className="flex w-1/3 items-center">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-xs text-neutral-500">{effect1}</p>
            <p className="text-xs text-neutral-500">{effect2}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-neutral-500">{effect3}</p>
            <p className="text-xs text-neutral-500">{effect4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
