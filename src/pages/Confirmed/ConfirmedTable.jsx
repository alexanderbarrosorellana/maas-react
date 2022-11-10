import Table from 'react-bootstrap/Table'
import { groupShiftsByDate } from '../Home/helper'
import moment from 'moment'
import { AiFillWarning } from 'react-icons/ai'

const ConfirmedTable = ({ shifts, engineers }) => {
  const days = groupShiftsByDate(shifts)

  const findEngineer = (id) => engineers.find(e => e.id === id)?.name
  return (
    <>
      {days.map(day => (
        <Table striped bordered hover key={day.date}>
          <thead>
            <tr>
              <th colSpan={2} style={{ textAlign: 'center' }}>{moment(day.date).format('dddd DD MMMM')}</th>
            </tr>
          </thead>
          <tbody>
            {day.shift.map(s => (
              <tr key={s.id}>
                <td style={{ backgroundColor: !s.assigned && '#FFCCCB' }}>
                  {`${moment(s.start_time).format('HH:mm')} - ${moment(s.end_time).format('HH:mm')}`}
                </td>
                <td>{s.assigned ? findEngineer(s.engineer_id) : <AiFillWarning color='#eed202' />}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </>
  )
}

export default ConfirmedTable
