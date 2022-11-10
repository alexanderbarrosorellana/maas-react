import Totals from './Totals'
import Services from '../../components/Services'
import Button from 'react-bootstrap/Button'
import ConfirmedTable from './ConfirmedTable'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

const ConfirmedShifts = () => {
  const navigate = useNavigate()

  const { data, isLoading } = useQuery(['services'], () => {
    return axios.get('http://localhost:3000/api/v1/services')
  })

  const [selectedService, setSelectedService] = useState({ name: 'Service', id: 0 })

  const { data: singleServiceData, isLoading: serviceLoading } = useQuery({
    queryKey: ['service'],
    queryFn: () => axios.get(`http://localhost:3000/api/v1/services/${selectedService.id}?date=${new Date()}`),
    enabled: !!data?.data && selectedService.id !== 0
  })

  const handleServiceClick = (service) => {
    setSelectedService(service)
  }

  const service = data?.data.find(s => s.id === selectedService.id)
  return (
    <>
      <div style={{ padding: '5%', display: 'flex', justifyContent: 'space-around' }}>
        {isLoading && <Spinner animation='border' role='status' />}
        {data && <Services serviceList={data?.data} selectedService={selectedService?.name || ''} onClick={handleServiceClick} />}
        {/* <Totals /> */}
        <Button variant='outline-primary' style={{ height: '20%' }} onClick={() => navigate('/availability')}>Editar Disponibilidad</Button>
      </div>
      {data && selectedService.id !== 0 && singleServiceData && (
        <div style={{ padding: '5%' }}>
          <ConfirmedTable shifts={singleServiceData?.data.shifts} engineers={service?.engineers} />
        </div>
      )}
    </>
  )
}

export default ConfirmedShifts
