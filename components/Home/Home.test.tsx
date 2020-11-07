import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from 'components/Home/Home'

describe('initial test', () => {
  it('renders About', () => {
    render(<Home />)

    expect(screen.getByText('About')).toBeDefined()
  })
})
