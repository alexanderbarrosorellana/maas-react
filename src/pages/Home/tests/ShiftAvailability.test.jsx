import { beforeAll, , describe, expect, it } from 'vitest'
import { renderWithRouter } from '../../../../testUtils'
import ShiftAvailability from '../ShiftAvailability'
import { screen } from '@testing-library/react'

// describe('ShiftAvailability', () => {
//   beforeAll(() => {
//     renderWithRouter(<ShiftAvailability />)
//   })

//   it('renders service component', () => {
//     const serviceDropdown = screen.getByText('Recorrido.cl')
//     const weekDropdown = screen.getByText('Semana')

//     expect(serviceDropdown).toBeDefined()
//     expect(weekDropdown).toBeDefined()
//   })
// })
