import {
  useContext, useEffect, useState,
} from 'react';
import { Context } from '../../context/Provider';
import { ICard, data } from '../../utils/data';
import Card from '../../components/Card';

function Game() {
  const [cards, setCards] = useState<ICard[]>([]);
  const { name } = useContext(Context);

  const changeAttrCard = (
    cardTarget: ICard,
    newValue: Record<string, boolean>,
    time = 250,
  ) => {
    setTimeout(() => {
      setCards((prevCards: ICard[]) => prevCards.map((c) => {
        if (c.id === cardTarget.id) {
          return {
            ...c,
            ...newValue,
          };
        }
        return c;
      }));
    }, time);
  };

  useEffect(() => {
    const shuffledData = data.sort(() => Math.random() - 0.5);
    setCards(shuffledData);
  }, []);

  return (
    <div className="w-screen h-screen max-h-screen bg-[url(/images/kame.jpeg)] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-center justify-center w-5/6 h-full gap-1 p-5 m-auto my-0">
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-[3rem] font-title text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {name}
          </h1>
          <h1 className="text-[3rem] font-title text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Tempo: 10
          </h1>
        </div>

        <div className="grid h-full grid-cols-5 gap-3 px-10 py-1 overflow-y-auto">
          {
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              changeAttrCard={changeAttrCard}
            />
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default Game;
