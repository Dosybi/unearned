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
    hours > 0 && (
      <div className="mb-8">
        <div>
          За {hours} {readableHours} вы могли бы заработать
        </div>
        <div className="text-xl font-bold">{readableAmount} ₸.</div>
      </div>
    )
  )
}

export default Result
