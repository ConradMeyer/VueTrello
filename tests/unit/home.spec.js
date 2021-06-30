import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'

import Home from '../../src/components/views/Home'
import { store } from '../../src/store/index'

describe('Home page', () => {
  beforeEach(() => {
    render(Home, { store })
  })

  it('renders correctly', () => {

    expect(screen.getByText(/mis paneles/i)).toBeInTheDocument()
  })
})