import { useContext } from 'react';
import Effects from '../data/EffectsData.json';
import { LogicContext } from '../context/LogicContext';

const Filter = () => {
  const { applyFilter } = useContext(LogicContext);

  const handleFilter = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    applyFilter(+target.value);
  };

  return (
    <div className="flex justify-center text-sm">
      <select
        onChange={handleFilter}
        defaultValue={'-1'}
        className="rounded-md border border-gray-300 px-1 py-0.5"
      >
        <option value="-1" disabled>
          Filter by effect:
        </option>
        <option value="-1">No Filter</option>
        {Effects.effects.map((data) => {
          return (
            <option value={data.id} key={`filter: ${data.id}`}>
              {data.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
