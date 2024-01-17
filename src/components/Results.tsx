import { useContext, useEffect, useState } from 'react';
import Heading from './ui/Heading';
import PotionImage from '/images/potions/Golden_Potion.png';
import PoisonImage from '/images/poisons/Red_Poison.png';
import { LogicContext } from '../context/LogicContext';
import { getHtmlDescriptions } from '../services/stateUtilities';
import { Switch } from '@headlessui/react';

const Results = () => {
  const { results } = useContext(LogicContext);
  const [isPotionShown, setPotionShown] = useState<boolean>(true);
  const [htmlDescriptions, setHtmlDescriptions] = useState<string[]>([]);

  useEffect(() => {
    setHtmlDescriptions(getHtmlDescriptions(results, isPotionShown));
  }, [results, isPotionShown]);

  const imgSrc = isPotionShown ? PotionImage : PoisonImage;
  const poisonTextClass = isPotionShown
    ? 'font-bold text-gray-400'
    : 'font-bold text-emerald-700';
  const potionTextClass = isPotionShown
    ? 'font-bold text-amber-500'
    : 'font-bold text-gray-400';

  return (
    <div className="border border-gray-300 py-1">
      <div className="text-center">
        <Heading variant="h3">Results</Heading>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={imgSrc} alt="Concoction image" />
        <div className="flex justify-center gap-2">
          <p className={poisonTextClass}>Poison</p>
          <Switch
            checked={isPotionShown}
            onChange={setPotionShown}
            className={`${
              isPotionShown ? 'bg-amber-400' : 'bg-emerald-700'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                isPotionShown ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <p className={potionTextClass}>Potion</p>
        </div>
        {htmlDescriptions.map((html, index) => {
          return (
            <p
              key={`desc ${index}`}
              dangerouslySetInnerHTML={{
                __html: html,
              }}
              className="p-1 text-center text-sm leading-none"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;
