import Head from 'next/head'
import { useState, useEffect } from 'react'

import Description from '../components/Description'
import Result from '../components/Result'
import ImageCardsWrapper from '../components/ImageCardsWrapper'
import Inputs from '../components/Inputs'

import madMen from '../assets/mad-men.png'
import breakingBad from '../assets/breaking-bad.png'
import dexter from '../assets/dexter.png'
import house from '../assets/house.png'
import friends from '../assets/friends.png'
import gameOfThrones from '../assets/game-of-thrones.png'
import howIMetYourMother from '../assets/how-i-met-your-mother.png'
import sopranos from '../assets/sopranos.png'
import lost from '../assets/lost.png'
import strangerThings from '../assets/stranger-things.png'
import office from '../assets/office.png'
import wire from '../assets/wire.png'
import rickAndMorty from '../assets/rick-and-morty.png'
import simpsons from '../assets/simpsons.png'
import bigBangTheory from '../assets/big-bang-theory.png'
import futurama from '../assets/futurama.png'
import walkingDead from '../assets/walking-dead.png'
import blackMirror from '../assets/black-mirror.png'
import southPark from '../assets/south-park.png'

const data = [
  {
    title: 'Безумцы',
    length: 92,
    image: madMen,
    isChecked: false,
  },
  {
    title: 'Во все тяжкие',
    length: 62,
    image: breakingBad,
    isChecked: false,
  },
  {
    title: 'Декстер',
    length: 96,
    image: dexter,
    isChecked: false,
  },
  {
    title: 'Доктор Хаус',
    length: 176,
    image: house,
    isChecked: false,
  },
  {
    title: 'Друзья',
    length: 121,
    image: friends,
    isChecked: false,
  },
  {
    title: 'Игра престолов',
    length: 70,
    image: gameOfThrones,
    isChecked: false,
  },
  {
    title: 'Как я встретил вашу маму',
    length: 104,
    image: howIMetYourMother,
    isChecked: false,
  },
  {
    title: 'Клан Сопрано',
    length: 86,
    image: sopranos,
    isChecked: false,
  },
  {
    title: 'Лост',
    length: 121,
    image: lost,
    isChecked: false,
  },
  {
    title: 'Очень странные дела',
    length: 20,
    image: strangerThings,
    isChecked: false,
  },
  {
    title: 'Офис',
    length: 99,
    image: office,
    isChecked: false,
  },
  {
    title: 'Прослушка',
    length: 60,
    image: wire,
    isChecked: false,
  },
  {
    title: 'Рик и Морти',
    length: 15,
    image: rickAndMorty,
    isChecked: false,
  },
  {
    title: 'Симпсоны',
    length: 334,
    image: simpsons,
    isChecked: false,
  },
  {
    title: 'Теория большого взрыва',
    length: 139,
    image: bigBangTheory,
    isChecked: false,
  },
  {
    title: 'Футурама',
    length: 62,
    image: futurama,
    isChecked: false,
  },
  {
    title: 'Ходячие мертвецы',
    length: 131,
    image: walkingDead,
    isChecked: false,
  },
  {
    title: 'Чёрное зеркало',
    length: 21,
    image: blackMirror,
    isChecked: false,
  },
  {
    title: 'Южный парк',
    length: 152,
    image: southPark,
    isChecked: false,
  },
]

export default function Home() {
  const [series, setSeries] = useState(data)
  const [hours, setHours] = useState(0)
  const [money, setMoney] = useState(0)
  const [salary, setSalary] = useState(500000)

  const getSeries = (title) => {
    const newSeries = [...series]
    newSeries.forEach((series) => {
      if (series.title === title) {
        series.isChecked = !series.isChecked
      }
    })
    setSeries(newSeries)
  }

  const handleSalaryChange = (number) => {
    const newSalary = number
    setSalary(newSalary)
  }

  useEffect(() => {
    const newHours = series
      .map((series) => (series.isChecked === true ? series.length : 0))
      .reduce((acc, cur) => acc + cur)
    setHours(newHours)
    const newMoney = Math.round(
      series
        .map((series) =>
          series.isChecked === true ? series.length * (salary / 22 / 8) : 0
        )
        .reduce((acc, cur) => acc + cur)
    )
    setMoney(newMoney)
  }, [series, salary])

  return (
    <>
      <Head>
        <title>Сколько денег вы потеряли из-за сериалов</title>
        <meta
          name="description"
          content="Сколько денег вы потеряли из-за сериалов"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto h-screen max-w-2xl bg-white p-4">
        <Description />
        <Inputs salary={salary} handleSalaryChange={handleSalaryChange} />
        <ImageCardsWrapper
          cards={series}
          handleButtonClick={getSeries}
          key={series.title}
        />
        <Result hours={hours} money={money} />
      </main>
    </>
  )
}
