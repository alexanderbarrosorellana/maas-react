import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import { groupShiftsByDate } from './helper'
import moment from 'moment'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
moment.locale('es')

const createEngineerShift = async (data) => {
  const { data: response } = await axios.post('http://localhost:3000/api/v1/engineer_shifts', data)
  return response.data
}

const destroyEngineerShift = async (id) => {
  const { data: response } = await axios.delete(`http://localhost:3000/api/v1/engineer_shifts/${id}`)
  return response.data
}

const AvailabilityTable = ({ shifts, engineers, refetchService }) => {
  const { mutate: mutateToCreate } = useMutation(createEngineerShift, { onSuccess: () => refetchService() })
  const { mutate: mutateToDestroy } = useMutation(destroyEngineerShift, { onSuccess: () => refetchService() })

  const days = groupShiftsByDate(shifts)

  const handleCheckChange = (e, shiftId, engineerId, engineerShift) => {
    if (e.target.checked) {
      mutateToCreate({ engineer_shift: { engineer_id: engineerId, shift_id: shiftId } })
    } else {
      mutateToDestroy(engineerShift.id)
    }
  }

  const findEngineerShift = (engineerShifts, engineerId) =>
    engineerShifts.find(es => es.engineer_id === engineerId)

  return (
    <>
      {days.map(day => (

        <Table striped bordered hover key={day.date}>
          <thead>
            <tr>
              <th>{moment(day.date).format('dddd DD MMMM')}</th>
              {engineers.map(engineer => (<th key={engineer.id}>{engineer.name}</th>))}
            </tr>
          </thead>
          <tbody>
            {day.shift.map(s => (
              <tr key={s.id}>
                <td>{`${moment(s.start_time).format('HH:mm')} - ${moment(s.end_time).format('HH:mm')}`}</td>
                {engineers.map(engineer => (
                  <td key={engineer.id}>
                    <Form.Check
                      checked={findEngineerShift(s.engineer_shifts, engineer.id)}
                      onChange={(e) => handleCheckChange(e, s.id, engineer.id, findEngineerShift(s.engineer_shifts, engineer.id))}
                    />
                  </td>
                ))}

              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </>
  )
}

export default AvailabilityTable
