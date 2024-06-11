import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './../context/Context.jsx';
import './CardComponent.css';
import WebRTU from './WebRTU.jsx';

const CardComponent = ( { dataHost } ) => {
  
  const navigate = useNavigate();
  const nagios="http://incotel.ddns.net:8081/nagios/cgi-bin/status.cgi?host=";

  const { dataServices } = useContext(Context);
  const alertData = [
    {id:0, name:'OK', color:'alert-success'},
    {id:1, name:'WARNING', color:'alert-warning'},
    {id:2, name:'CRITICAL', color:'alert-danger'},
    {id:3, name:'UNKNOWN', color:'alert-info'}
  ]
  //console.log(dataServices)

  const handleHost = () => {
    navigate(`/host/${dataHost.host_name}`)
  }

  return (
    <>
            <Card bg="light" style={{ width: '18rem' }} className="mb-2" >
          {/*//////////////////////////////////////////////////////////////////*/}
           {/* <iframe src="http://192.168.0.240" width="100%" height="180rem"></iframe> */}
             <WebRTU></WebRTU>
            {/*//////////////////////////////////////////////////////////////////*/}
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