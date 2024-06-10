import { useContext} from 'react';
import { Context } from './../context/Context.jsx';
import { useParams } from 'react-router-dom';
import './TableComponent.css';
import { Button, Card, ListGroup } from 'react-bootstrap';

const TableComponent = () => {

  const { dataServices, dataHosts } = useContext(Context);
  const { hostname } = useParams();

  const alertData = [
    {id:0, name:'OK', color:'alert-success'},
    {id:1, name:'WARNING', color:'alert-warning'},
    {id:2, name:'CRITICAL', color:'alert-danger'},
    {id:3, name:'UNKNOWN', color:'alert-info'}
  ]
  
  return (
    <>
      <div className="galleryCard" >
        { dataServices.filter( el => el.host_name==hostname).map( ({ service_description, plugin_output, current_state, last_check },i)  =>(
          
          <Card className="text-bg-danger"  style={{ width: '15rem'}} key={i}>
            <Card.Header ><h5>{service_description}</h5></Card.Header>
            <ListGroup variant="flush" className="mx-auto list-group-item-danger">
              <ListGroup.Item><strong>Status Information: </strong> {plugin_output} </ListGroup.Item>
              <ListGroup.Item><strong>Status:             </strong> {current_state} </ListGroup.Item>
              <ListGroup.Item><strong>Last Check:         </strong> {last_check}    </ListGroup.Item>
            </ListGroup>
          </Card>
      
        ))}
      </div>
    </>
  )
}

export default TableComponent