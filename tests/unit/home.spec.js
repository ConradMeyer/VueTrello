import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'

import Home from '../../src/components/views/Home'

describe('Home page', () => {
    it('renders correctly', () => {
      render(Home) 

      expect(screen.getByText(/mis paneles/i)).toBeInTheDocument()
    })
})