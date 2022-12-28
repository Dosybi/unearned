import { useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

const Series = ({ series, handleSeriesSelect, select, handleDeleteSelect }) => {
  const [currentTitle, setCurrentTitle] = useState('')

  return (
    <div className="mb-4 flex items-center">
      <select
        id="series"
        className="block h-10 w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        onChange={(e) => {
          handleSeriesSelect(e.target.value)
          setCurrentTitle(e.target.value)
        }}
      >
        <option defaultValue>Просмотренный сериал</option>
        {series.map((series) => {
          return (
            <option value={series.title} key={series.title}>
              {series.title}
            </option>
          )
        })}
      </select>
      {select > 1 && (
        <HiOutlineTrash
          className="ml-4 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
          onClick={() => handleDeleteSelect(select, currentTitle)}
        />
      )}
    </div>
  )
}

export default Series
