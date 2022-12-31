import Head from 'next/head'
import { useState, useEffect } from 'react'

import Description from '../components/Description'
import Result from '../components/Result'
import ImageCardsWrapper from '../components/ImageCardsWrapper'
import Inputs from '../components/Inputs'

import madMen from '../assets/mad-men.jpeg'
import breakingBad from '../assets/breaking-bad.jpeg'
import dexter from '../assets/dexter.jpeg'
import house from '../assets/house.jpeg'
import friends from '../assets/friends.jpeg'
import gameOfThrones from '../assets/game-of-thrones.jpeg'
import howIMetYourMother from '../assets/how-i-met-your-mother.jpeg'
import sopranos from '../assets/sopranos.jpeg'
import lost from '../assets/lost.jpeg'
import strangerThings from '../assets/stranger-things.jpeg'
import office from '../assets/office.jpeg'
import wire from '../assets/wire.jpeg'
import rickAndMorty from '../assets/rick-and-morty.jpeg'
import simpsons from '../assets/simpsons.jpeg'
import bigBangTheory from '../assets/big-bang-theory.jpeg'
import futurama from '../assets/futurama.jpeg'
import walkingDead from '../assets/walking-dead.jpeg'
import blackMirror from '../assets/black-mirror.jpeg'
import southPark from '../assets/south-park.jpeg'
import downtonAbbey from '../assets/downton-abbey.jpeg'
import sherlock from '../assets/sherlock.jpeg'
import scrubs from '../assets/scrubs.jpeg'
import gravityFalls from '../assets/gravity-falls.jpeg'
import shameless from '../assets/shameless.jpeg'
import betterCallSaul from '../assets/better-call-saul.jpeg'
import chernobyl from '../assets/chernobyl.jpeg'
import siliconValley from '../assets/silicon-valley.jpeg'

const data = [
  {
    title: 'Аббатство Даунтон',
    length: 47,
    image: downtonAbbey,
    isChecked: false,
  },
  {
    title: 'Безумцы',
    length: 92,
    image: madMen,
    isChecked: false,
  },
  {
    title: 'Бесстыжие',
    length: 123,
    image: shameless,
    isChecked: false,
  },
  {
    title: 'Во все тяжкие',
    length: 49,
    image: breakingBad,
    isChecked: false,
  },
  {
    title: 'Гравити Фолз',
    length: 15,
    image: gravityFalls,
    isChecked: false,
  },
  {
    title: 'Декстер',
    length: 88,
    image: dexter,
    isChecked: false,
  },
  {
    title: 'Доктор Хаус',
    length: 127,
    image: house,
    isChecked: false,
  },
  {
    title: 'Друзья',
    length: 86,
    image: friends,
    isChecked: false,
  },
  {
    title: 'Игра престолов',
    length: 67,
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
    title: 'Клиника',
    length: 67,
    image: scrubs,
    isChecked: false,
  },
  {
    title: 'Лост',
    length: 121,
    image: lost,
    isChecked: false,
  },
  {
    title: 'Лучше звоните Соулу',
    length: 49,
    image: betterCallSaul,
    isChecked: false,
  },
  {
    title: 'Очень странные дела',
    length: 36,
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
    length: 24,
    image: rickAndMorty,
    isChecked: false,
  },
  {
    title: 'Силиконовая долина',
    length: 25,
    image: siliconValley,
    isChecked: false,
  },
  {
    title: 'Симпсоны',
    length: 267,
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
    length: 16,
    image: blackMirror,
    isChecked: false,
  },
  {
    title: 'Чернобыль',
    length: 6,
    image: chernobyl,
    isChecked: false,
  },
  {
    title: 'Шерлок',
    length: 23,
    image: sherlock,
    isChecked: false,
  },
  {
    title: 'Южный парк',
    length: 118,
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
          salary={salary}
          handleButtonClick={getSeries}
          key={series.title}
        />
        <Result hours={hours} money={money} />
      </main>
    </>
  )
}
