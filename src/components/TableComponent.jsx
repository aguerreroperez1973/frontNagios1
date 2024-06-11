import { useContext} from 'react';
import { Context } from './../context/Context.jsx';
import { useParams } from 'react-router-dom';
import './TableComponent.css';
import { Button, Card, ListGroup } from 'react-bootstrap';

const TableComponent = () => {

  const { dataServices, dataHosts } = useContext(Context);
  const { hostname } = useParams();

  const alertData = [
    {id:0, name:'OK', color:'list-group-item-success'},
    {id:1, name:'WARNING', color:'list-group-item-warning'},
    {id:2, name:'CRITICAL', color:'list-group-item-danger'},
    {id:3, name:'UNKNOWN', color:'list-group-item-danger'}
  ]
  //console.log(dataServices)
  return (
    <>
      <div className="galleryCard" >
        { dataServices.filter( el => el.host_name==hostname).map( ({ service_description, plugin_output, current_state, last_check },i)  =>(
          
          <Card style={{ width: '20rem'}} key={i}>
            <Card.Header ><h5>{service_description}</h5></Card.Header>
            <ListGroup variant="flush" className={ alertData.filter( (co) => co.id == current_state ).map( (d) => { return d.color } ) } >
              <ListGroup.Item><strong>Status Information: </strong> {plugin_output} </ListGroup.Item>
              <ListGroup.Item><strong>Status:             </strong> { alertData.filter( (co) => co.id == current_state ).map( (d) => { return d.name } ) } </ListGroup.Item>
              <ListGroup.Item><strong>Last Check:         </strong> {last_check}    </ListGroup.Item>
            </ListGroup>
          </Card>
      
        ))}
      </div>
    </>
  )
}

export default TableComponent