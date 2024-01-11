import { useContext, useEffect, useState } from 'react';
import IngredientTile from './IngredientTile';
import Heading from './ui/Heading';
import { LogicContext } from '../context/LogicContext';
import {
  getEffectNamesFromIds,
  getHighlightedEffects,
  getIngredientsCompatibleByEffect,
} from '../services/stateUtilities';
import { IngredientData } from '../services/interfaces';

const IngredientsList = () => {
  const { ingredientsList, selections } = useContext(LogicContext);
  const [lastAddedEffects, setLastAddedEffects] = useState<string[]>([]);
  const [lastAddedCompatibles, setLastAddedCompatibles] = useState<
    IngredientData[][]
  >([]);

  useEffect(() => {
    const eIDs = getHighlightedEffects(selections);
    setLastAddedEffects(getEffectNamesFromIds(eIDs));
    const viableIngredients: IngredientData[][] = eIDs.map((eID) => {
      return getIngredientsCompatibleByEffect(eID);
    });
    setLastAddedCompatibles(viableIngredients);
  }, [selections]);

  if (!selections.length) {
    return (
      <div className="border border-black py-1">
        <Heading variant="h3" className="text-center">
          Ingredients
        </Heading>
        <div className="flex flex-wrap justify-center">
          {ingredientsList.map((data) => {
            return <IngredientTile data={data} key={`tile: ${data.id}`} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="m-1 flex flex-col justify-center border border-black p-1">
      <Heading variant="h3" className="text-center">
        Ingredients
      </Heading>
      {lastAddedEffects.map((eff, index) => {
        return (
          <div key={eff}>
            <Heading variant="h5" key={eff}>
              {eff}
            </Heading>
            <div className="flex flex-wrap justify-start">
              {lastAddedCompatibles[index].map((data) => {
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

/**
 * * With zero ingredients selected, should display the list alphabetically, unless filtered by effect.
 * ? With one or two ingredients selected, should display the list in four parts, separated with headers by each effect of the last selected ingredient.
 * % With three ingredients selected, back to alphabetical with selected ingredients at the top, or a results screen
 */
