import Image from 'next/image'

const ImageCard = ({ title, image, isChecked, handleButtonClick }) => {
  return (
    <div className="relative shrink-0">
      <div className="absolute top-5 left-3 p-1 text-lg font-bold leading-5 text-white">
        {title}
      </div>
      <Image
        className="w-auto rounded-xl"
        src={image}
        width={400}
        height={500}
        alt={title}
        priority
      />
      <button
        className={`absolute bottom-6 left-4 rounded-2xl border border-white px-1.5 py-1 text-lg transition-colors md:hover:bg-white md:hover:text-black ${
          isChecked ? 'bg-white text-black' : 'bg-transparent text-white'
        }`}
        onClick={() => handleButtonClick(title)}
      >
        Смотрел
      </button>
    </div>
  )
}

export default ImageCard
