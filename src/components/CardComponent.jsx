import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './../context/Context.jsx';
import './CardComponent.css';
import WebRTU from './WebRTU.jsx';
import { Button } from 'react-bootstrap';

const CardComponent = ( { dataHost } ) => {
  
  const navigate = useNavigate();
  //const nagios="http://incotel.ddns.net:8081/nagios/cgi-bin/status.cgi?host=";
  const nagios="http://192.168.0.12/nagios/cgi-bin/status.cgi?host=";
  const urlImg= "./../../public/"

  const { dataServices } = useContext(Context);
  const alertData = [
    {id:0, name:'OK', color:'alert-success'},
    {id:1, name:'WARNING', color:'alert-warning'},
    {id:2, name:'CRITICAL', color:'alert-danger'},
    {id:3, name:'UNKNOWN', color:'alert-danger'}
  ]
  //console.log(dataHost.host_name)

  const handleHost = () => {
    navigate(`/host/${dataHost.host_name}`)
  }

  return (
    <>
          <Card bg="light" style={{ width: '18rem' }} className="mb-2" >
            <a href='http://192.168.0.241'><Card.Img variant="top" src="./../../public/RTU_SFM4.png"></Card.Img></a>
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
                <div className="m-0 p-0" ><Card.Link href="" onClick={handleHost}>Card Link</Card.Link>
                <Card.Link href={nagios+dataHost.host_name} >Another Link</Card.Link></div>
              </Card.Body>
            </Card>
                  
    </>
  );
}

export default CardComponent