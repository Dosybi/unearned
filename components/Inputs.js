import { useEffect, useState } from 'react'
import Button from './Button'

import SalaryInput from './SalaryInput'
import Series from './Series'

const series = [
  {
    title: 'Безумцы',
    length: 92,
  },
  {
    title: 'Во все тяжкие',
    length: 62,
  },
  {
    title: 'Декстер',
    length: 96,
  },
  {
    title: 'Друзья',
    length: 121,
  },
  {
    title: 'Игра престолов',
    length: 70,
  },
  {
    title: 'Как я встретил вашу маму',
    length: 104,
  },
  {
    title: 'Клан Сопрано',
    length: 86,
  },
  {
    title: 'Лост',
    length: 121,
  },
  {
    title: 'Очень странные дела',
    length: 20,
  },
  {
    title: 'Офис',
    length: 99,
  },
  {
    title: 'Симпсоны',
    length: 334,
  },
  {
    title: 'Теория большого взрыва',
    length: 139,
  },
  {
    title: 'Ходячие мертвецы',
    length: 131,
  },
  {
    title: 'Чёрное зеркало',
    length: 21,
  },
  {
    title: 'Южный парк',
    length: 152,
  },
]

const Inputs = ({ handleResult }) => {
  const [salary, setSelary] = useState(500000)
  const [watchedSeries, setWatchedSeries] = useState([])
  const [hours, setHours] = useState(0)
  const [result, setResult] = useState(0)
  const [selects, setSelects] = useState([1])

  const getResult = (salary, hours) => {
    const hourlyRate = salary / 22 / 8
    const result = Math.round(hours * hourlyRate)
    handleResult(hours, result)
    return result
  }

  useEffect(() => {
    setResult(getResult(salary, hours))
  }, [salary, hours])

  const handleSalaryChange = (amount) => {
    const newSalaty = amount
    setSelary(newSalaty)
  }

  const handleSeriesSelect = (title) => {
    let newSeries = []
    if (watchedSeries.includes(series.filter((s) => s.title === title)[0])) {
      newSeries = [...watchedSeries]
    } else {
      newSeries = [...watchedSeries, series.filter((s) => s.title === title)[0]]
    }
    const totalHours = newSeries
      .map((s) => s.length)
      .reduce((acc, cur) => acc + cur)
    setWatchedSeries(newSeries)
    setHours(totalHours)
  }

  const handleButtonClick = () => {
    const newSelect = selects[selects.length - 1] + 1
    setSelects([...selects, newSelect])
  }

  const handleDeleteSelect = (select, title) => {
    const selectToDelete = selects.indexOf(select)
    setSelects(selects.filter((_, index) => index !== selectToDelete))
    const newSeriesList = watchedSeries.filter(
      (series) => series.title !== title
    )
    const totalHours = newSeriesList
      .map((s) => s.length)
      .reduce((acc, cur) => acc + cur)
    setWatchedSeries(newSeriesList)
    setHours(totalHours)
  }

  return (
    <div className="mb-6 rounded-xl bg-gray-100 p-6">
      <SalaryInput salary={salary} handleSalaryChange={handleSalaryChange} />
      {selects.map((select) => {
        return (
          <Series
            series={series}
            handleSeriesSelect={handleSeriesSelect}
            handleDeleteSelect={handleDeleteSelect}
            select={select}
            key={select}
          />
        )
      })}
      <Button label="+ Добавить" handleButtonClick={handleButtonClick} />
    </div>
  )
}

export default Inputs
