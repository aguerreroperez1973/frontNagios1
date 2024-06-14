import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './../context/Context.jsx';
import './CardComponent.css';
import OpenDoor from './OpenDoor.jsx';
import { Button } from 'react-bootstrap';


const CardComponent = ( { dataHost } ) => {
  
  //const navigate = useNavigate();
  const urlImg= "./../../public/"

  const { dataServices, localdatos } = useContext(Context);
  const alertData = [
    {id:0, name:'OK', color:'alert-success'},
    {id:1, name:'WARNING', color:'alert-warning'},
    {id:2, name:'CRITICAL', color:'alert-danger'},
    {id:3, name:'UNKNOWN', color:'alert-danger'}
  ]

  return (
    <>
          <Card bg="light" style={{ width: '18rem' }} className="mb-2" >
           {/* <a href={ localdatos.filter( (name) => name.hostname == dataHost.host_name ).map( (d) => { return "http://"+d.ipadd}) }>
              <Card.Img variant="top" src={ localdatos.filter( (name) => name.hostname == dataHost.host_name ).map( (d) => { return d.img}) }></Card.Img>
              </a>*/}
              <Link to={ `RtuPage/${dataHost.host_name}` }><Card.Img variant="top" src={ localdatos.filter( (name) => name.hostname == dataHost.host_name ).map( (d) => { return d.img}) }></Card.Img></Link> 
              <Card.Body>
                <Card.Title className={ alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.color}) } key={dataHost.host_name}>  
                <strong>{dataHost.host_name}</strong></Card.Title>
                <Card.Subtitle className={ alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.color}) }>
                  <strong style={{ fontSize:11}}>{alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.name})}</strong></Card.Subtitle>
                <Card.Text className={ alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.color}) } > <strong>Status: </strong>{dataHost.plugin_output}</Card.Text>
                
              <div>
                    {  dataServices.filter( (el) => el.host_name == dataHost.host_name )
                        .map( (p,i) => { 
                          return <Card.Text className={ alertData.filter( (co) => co.id == p.current_state ).map( (a) => { return a.color} )} key={i}> 
                              <strong>Service:</strong> {p.service_description}  &nbsp; 
                              <strong>Status:</strong> { alertData.filter( (co) => co.id == p.current_state ).map( (a) => { return a.name} )}
                          </Card.Text> })
                    }
                </div> <br />
                <div className="m-0 p-0 d-flex justify-content-around" >
                  <Link to={`host/${dataHost.host_name}`}> <h6>Detalles</h6></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={`NagiosPage/${dataHost.host_name}`}> <h6>Ir a NAGIOS</h6></Link>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                     {/* <OpenDoor></OpenDoor>*/}
              </Card.Footer>
            </Card>
                  
    </>
  );
}

export default CardComponent