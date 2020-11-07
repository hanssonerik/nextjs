import React from 'react'
import { ReactElement } from 'react'
import Head from 'next/head'
import { View } from './Home.View'

export const Home = (): ReactElement => (
  <>
    <Head>
      <title>About Erik Hansson</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <View />
  </>
)
