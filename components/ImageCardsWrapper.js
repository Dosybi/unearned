import ImageCard from './ImageCard'

const ImageCardsWrapper = ({ cards, salary, handleButtonClick }) => {
  return (
    <div className="cards-wrapper mb-8 flex flex-wrap justify-between gap-y-6">
      {cards.map((card) => {
        return (
          <ImageCard
            {...card}
            salary={salary}
            key={card.title}
            handleButtonClick={handleButtonClick}
          />
        )
      })}
    </div>
  )
}

export default ImageCardsWrapper
