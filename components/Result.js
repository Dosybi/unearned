const Result = ({ hours, money }) => {
  const readableAmount = String(money)
    .split('')
    .map((letter, i, arr) => (i === arr.length - 4 ? letter + ' ' : letter))
    .map((letter, i, arr) => (i === arr.length - 7 ? letter + ' ' : letter))
    .join('')
  const hoursLastDigit =
    String(hours).split('')[String(hours).split('').length - 1]
  const readableHours =
    hoursLastDigit === '1' && hours > 20
      ? 'час'
      : hoursLastDigit === '2' ||
        hoursLastDigit === '3' ||
        hoursLastDigit === '4'
      ? 'часа'
      : 'часов'

  return (
    hours != 0 && (
      <div className="sticky bottom-0 rounded-xl bg-slate-800 p-4 text-white">
        <div>На просмотр сериалов вы потратили</div>
        <div className="mb-2 text-2xl font-bold">
          {hours} {readableHours}.
        </div>
        <div>За это время вы могли бы заработать</div>
        <div className="text-2xl font-bold">{readableAmount} ₸.</div>
      </div>
    )
  )
}

export default Result
