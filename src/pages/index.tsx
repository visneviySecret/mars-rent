import Head from 'next/head'
import Hero from '@/sections/hero/hero'
import Header from '@/components/Header/Header'
import Button from '@/components/UI/Button/Button'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import About from '@/sections/about/about'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const handleTheme = () => {
    currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Button onClick={handleTheme}>Switch theme</Button>
      </main>
    </>
  )
}
