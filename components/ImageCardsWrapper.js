import ImageCard from './ImageCard'

const ImageCardsWrapper = ({ cards, handleButtonClick }) => {
  return (
    <div className="cards-wrapper -mx-4 mb-8 flex gap-4 overflow-x-auto px-4">
      {cards.map((card) => {
        return (
          <ImageCard
            {...card}
            key={card.title}
            handleButtonClick={handleButtonClick}
          />
        )
      })}
    </div>
  )
}

export default ImageCardsWrapper
