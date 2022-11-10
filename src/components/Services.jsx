import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Card from 'react-bootstrap/Card'

const Services = ({ serviceList, selectedService, onClick }) => {
  return (
    <Card style={{ borderWidth: 0 }}>
      {serviceList && (
        <>
          <ButtonGroup vertical size='lg'>
            <DropdownButton
              as={ButtonGroup}
              title={selectedService}
            >
              {serviceList.map(service => (
                <Dropdown.Item eventKey='1' onClick={() => onClick({ name: service.name, id: service.id })} key={service.id}>{service.name} </Dropdown.Item>
              ))}
            </DropdownButton>
          </ButtonGroup>
        </>
      )}

      {/* <p>del 01/12/2022 al 30/12/2022</p> */}
    </Card>
  )
}

export default Services
