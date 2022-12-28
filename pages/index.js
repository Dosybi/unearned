import Head from 'next/head'
import { useState } from 'react'

import Description from '../components/Description'
import Inputs from '../components/Inputs'
import Result from '../components/Result'

export default function Home() {
  const [result, setResult] = useState({ hours: 0, money: 0 })
  const handleResult = (hours, result) => {
    const newResult = { hours: hours, money: result }
    setResult(newResult)
  }
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
      <main className="mx-auto max-w-2xl bg-white px-4 pt-4">
        <Description />
        <Inputs handleResult={handleResult} />
        <Result {...result} />
      </main>
    </>
  )
}
