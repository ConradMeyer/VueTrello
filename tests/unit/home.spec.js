jest.mock('../../src/api/GetBoards.js')
import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'

import Header from '../../src/components/Header'
import Home from '../../src/components/views/Home'
import store from '../../src/store'

jest.setTimeout(10000)

describe('Header component:', () => {
  beforeEach(() => {
    render(Header)
  })

  it('- renders correctly the title', () => {
    expect(screen.getByText(/trello/i)).toBeInTheDocument()
  })
  it('- renders correctly the link', () => {
    expect(screen.getByText(/mis paneles/i)).toBeInTheDocument()
  })
})

describe('Home page:', () => {
  beforeEach(() =>
    render(Home, { store })
  )
  it('- Renders correctly without fetch', () => {
    expect(screen.getByText(/mis paneles/i)).toBeInTheDocument()
  })

  describe('Working with fetch', () => {
    it('- At first renders the spinner', () => {
      expect(screen.getByRole('spinner')).toBeInTheDocument()
    })
    it('- Render the response of the fetch', async () => {
      await waitFor(() => {
        expect(screen.queryByRole('spinner')).not.toBeInTheDocument()
      }, { timeout: 3000 })

      waitFor(() => {
        expect(screen.getByText(/casa/i)).toBeInTheDocument()
      }, { timeout: 3000 })
    })

    describe('Working with the input', () => {
      it('- Find the input', () => {
        expect(screen.getByRole('input')).toBeInTheDocument()
      })
      it('- Can write on the input', async () => {
        await fireEvent.update(screen.getByRole('input'), "Nueva Lista")

        waitFor(() =>
          expect(screen.getByText(/nueva lista/i)).toBeInTheDocument()
        )
        await fireEvent.keyPress(screen.getByRole('input'), { key: 'Enter', code: 'Enter' })
        screen.debug()
      })
    })

  })
})