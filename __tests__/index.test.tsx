import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a convert button', () => {
    render(<Home />)

    const convertButton = screen.getByRole('button',{
      name: 'Convert'
    })

    expect(convertButton).toBeInTheDocument()
  })
})
