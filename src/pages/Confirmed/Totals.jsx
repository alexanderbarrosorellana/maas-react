import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Totals = () => {
  return (
    <Card style={{ width: '13rem', marginLeft: '3%' }}>
      <ListGroup variant='flush'>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Totals
