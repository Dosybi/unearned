const content = {
  title: 'Сколько вы могли бы заработать, если бы не смотрели сериалы',
  text: [
    'Допустим, вы могли бы посвятить работе всё время, которое уходит на просмотр сериалов. Калькулятор считает, сколько в этом случае вы могли бы заработать.',
  ],
}

const Description = () => {
  return (
    <div className="mt-2 mb-8">
      <h1 className="mb-2 text-2xl font-bold">{content.title}</h1>
      <p>{content.text}</p>
    </div>
  )
}

export default Description
