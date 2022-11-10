import { Wrapper } from './styles'
import Services from '../../components/Services'
import AvailabilityTable from './AvailabilityTable'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import { useState } from 'react'

const ShiftAvailability = () => {
  const { data, isLoading, refetch: refetchService } = useQuery(['services'], () => {
    return axios.get('http://localhost:3000/api/v1/services')
  })
  const [selectedService, setSelectedService] = useState({ name: 'Service', id: 0 })

  const handleServiceClick = (service) => {
    setSelectedService(service)
  }

  const service = data?.data.find(s => s.id === selectedService.id)

  return (
    <Wrapper>
      {isLoading && <Spinner animation='border' role='status' />}
      {data && <Services serviceList={data?.data} selectedService={selectedService?.name || ''} onClick={handleServiceClick} />}
      {data && selectedService.id !== 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '3%' }}>
          <AvailabilityTable shifts={service.shifts} engineers={service.engineers} refetchService={refetchService} />
        </div>)}
    </Wrapper>
  )
}

export default ShiftAvailability
