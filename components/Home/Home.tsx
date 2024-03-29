import React from 'react'
import { ReactElement } from 'react'
import Head from 'next/head'
import { View } from './Home.View'

export const Home = (): ReactElement => (
  <>
    <Head>
      <title>Awesome Next.js template</title>
      <meta name="description" content="Meta description content goes here." />
      <meta name="description" content="Meta description content goes here." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <View message={'...(not really)'} />
  </>
)
