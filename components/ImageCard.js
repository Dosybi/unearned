import Image from 'next/image'

const ImageCard = ({
  title,
  image,
  length,
  salary,
  isChecked,
  handleButtonClick,
}) => {
  const hoursLastDigit =
    String(length).split('')[String(length).split('').length - 1]
  const readableHours =
    hoursLastDigit === '1' && length > 20
      ? 'час'
      : hoursLastDigit === '2' ||
        hoursLastDigit === '3' ||
        hoursLastDigit === '4'
      ? 'часа'
      : 'часов'
  const seriesCost = Math.round((salary / 22 / 8) * length)
  const readableAmount = String(seriesCost)
    .split('')
    .map((letter, i, arr) => (i === arr.length - 4 ? letter + ' ' : letter))
    .map((letter, i, arr) => (i === arr.length - 7 ? letter + ' ' : letter))
    .join('')
  return (
    <div className="w-[48%] md:w-[32%]">
      <div className="relative">
        <div
          className={`${
            isChecked ? 'bg-slate-50 bg-opacity-80' : ''
          } absolute top-0 h-full w-full cursor-pointer transition-colors duration-700`}
          onClick={() => handleButtonClick(title)}
        ></div>
        <Image
          className="rounded-xl"
          src={image}
          alt={title}
          priority
          responsive
        />
        <div
          className={`absolute bottom-4 left-3 h-6 w-6 cursor-pointer rounded-full border border-white ${
            isChecked ? 'bg-green-700 bg-opacity-80' : ''
          }`}
          onClick={() => handleButtonClick(title)}
        ></div>
        <div
          className={`${isChecked ? 'absolute bottom-4 left-11' : 'hidden'}`}
        >
          Смотрел
        </div>
      </div>
      <div className="mt-1 pl-1 text-sm">
        {length} {readableHours}, {readableAmount} ₸
      </div>
    </div>
  )
}

export default ImageCard
