const Result = ({ hours, money }) => {
  const readableAmount = String(money)
    .split('')
    .map((letter, i, arr) => (i === arr.length - 4 ? letter + ' ' : letter))
    .map((letter, i, arr) => (i === arr.length - 7 ? letter + ' ' : letter))
    .join('')

  return (
    hours != 0 && (
      <div>
        <div>На просмотр сериалов вы потратили</div>
        <div className="mb-2 text-2xl font-bold">{hours} часов.</div>
        <div>За это время вы могли бы заработать</div>
        <div className="text-2xl font-bold">{readableAmount} ₸.</div>
      </div>
    )
  )
}

export default Result
