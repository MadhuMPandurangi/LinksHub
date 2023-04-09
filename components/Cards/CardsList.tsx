import { FC, useState } from "react";
import { BackToTopButton } from "../BackToTop/BackToTopButton";
import Popup from "components/popup";
import CardsListItem from "./CardsListItem";
import type { IData } from "types";

const CardsList: FC<{ cards: IData[] }> = (props) => {
  const { cards } = props;
  const [currentCard, setCurrentCard] = useState<IData | null>(null);

  const getCardId = (item: IData | null) => {
    setCurrentCard(item);
  };

  const removeCurrentCard = () => {
    setCurrentCard(null);
  };

  cards.sort((a: IData, b: IData) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return (
    <>
      <div className="flex justify-center">
        <ul className="flex flex-wrap w-full gap-4 justify-center">
          {cards.map((data: IData) => (
            <CardsListItem 
              key={data.id}
              data={data}
              onClick={() => getCardId(data)}
            />
          ))}
        </ul>
      </div>
      <BackToTopButton />
      <Popup currentCard={currentCard} onClose={removeCurrentCard} />
      
    </>
  );
};

export default CardsList;
