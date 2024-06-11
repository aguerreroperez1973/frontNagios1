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

  const colorH=alertData.filter( (co) => co.id == dataServices.current_state && hostname == dataServices.host_name ).map( (d) => { return d.color});
  console.log(colorH)
  return (
    <>
      <div className="galleryCard" >
        
        { dataServices.filter( el => el.host_name==hostname).map( ({ service_description, plugin_output, current_state, last_check },i)  =>(
          
          <Card style={{ width: '20rem', backgroundColor:{colorH}  }} key={i}>
            <Card.Header ><h5>{service_description}</h5></Card.Header>
            <ListGroup variant="flush" className="list-group-item-warning" >
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