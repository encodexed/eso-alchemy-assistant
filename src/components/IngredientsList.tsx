import { useContext, useEffect, useState } from 'react';
import IngredientTile from './IngredientTile';
import Heading from './ui/Heading';
import { LogicContext } from '../context/LogicContext';
import {
  getEffectNamesFromIds,
  getEffectsList,
  getIngredientsCompatibleByEffect,
  trimSections,
} from '../services/stateUtilities';
import { IngredientData } from '../services/interfaces';
import Filter from './Filter';

const initColors = [
  'text-blue-500',
  'text-red-500',
  'text-yellow-500',
  'text-teal-400',
  'text-orange-500',
  'text-green-500',
  'text-purple-500',
  'text-pink-400',
];

const IngredientsList = () => {
  const { ingredientsList, selections, filteringBy } = useContext(LogicContext);
  const [effectsNamesPool, setEffectsNamesPool] = useState<string[]>([]);
  const [headingColors, setHeadingColors] = useState<string[]>(initColors);
  const [compatibleIngredients, setCompatibleIngredients] = useState<
    IngredientData[][]
  >([]);

  useEffect(() => {
    const eIDs = getEffectsList(selections);
    const effectsHeadings = getEffectNamesFromIds(eIDs);
    const viableIngredients: IngredientData[][] = eIDs.map((eID) => {
      return getIngredientsCompatibleByEffect(eID);
    });
    const trimmed = trimSections(
      effectsHeadings,
      viableIngredients,
      initColors,
    );
    setEffectsNamesPool(trimmed.headings);
    setCompatibleIngredients(trimmed.viable);
    setHeadingColors(trimmed.colors);
  }, [selections]);

  if (!selections.length && filteringBy < 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-sm border border-gray-200 bg-white py-1 shadow-sm">
        <div className="text-center">
          <Heading variant="h4">Ingredients</Heading>
          <p className="text-sm text-gray-500">
            Select ingredients or effects to filter by to get started
          </p>
        </div>
        <Filter />
        <div className="flex flex-wrap justify-center">
          {ingredientsList.map((data) => {
            return <IngredientTile data={data} key={`tile: ${data.id}`} />;
          })}
        </div>
      </div>
    );
  }

  if (!selections.length && filteringBy >= 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-sm border border-gray-200 bg-white py-1 shadow-sm">
        <div className="text-center">
          <Heading variant="h3">Ingredients</Heading>
          <p className="text-sm text-gray-500">
            Select ingredients or effects to filter by to get started
          </p>
        </div>
        <Filter />
        <div className="flex flex-wrap justify-center">
          {ingredientsList.map((data) => {
            if (data.effectsIDs.includes(filteringBy)) {
              return <IngredientTile data={data} key={`tile: ${data.id}`} />;
            }
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded-sm border border-gray-200 bg-white py-1 shadow-sm">
      <div className="text-center">
        <Heading variant="h3">Ingredients</Heading>
        <p className="text-sm text-gray-500">
          Add more ingredients for more effects
        </p>
      </div>
      {effectsNamesPool.map((eff, index) => {
        return (
          <div key={`${eff} ${index}`}>
            <Heading variant="h6" key={eff} className={headingColors[index]}>
              {eff}
            </Heading>
            <div className="flex flex-wrap justify-start">
              {compatibleIngredients[index].map((data) => {
                if (!selections.includes(data.id)) {
                  return (
                    <IngredientTile data={data} key={`${eff} ${data.id}`} />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IngredientsList;
