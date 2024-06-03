import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { Context } from './../context/Context.jsx';
import './CardComponent.css';

const CardComponent = ( { dataHost } ) => {
  
  const { dataServices } = useContext(Context);
  const alertData = [
    {id:0, name:'OK', color:'alert-success'},
    {id:1, name:'WARNING', color:'alert-warning'},
    {id:2, name:'CRITICAL', color:'alert-danger'},
    {id:3, name:'UNKNOWN', color:'alert-info'}
  ]
  
  console.log(dataServices)

  return (
    <>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
            <Card bg="light" style={{ width: '18rem' }} className="mb-2" >
              <Card.Body>
                <Card.Title className={ alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.color}) } key={dataHost.host_name}>  
                <strong style={{ fontSize:12}}>{dataHost.host_name}</strong></Card.Title>
                <Card.Subtitle className={ alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.color}) }>
                  <strong style={{ fontSize:11}}>{alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.name})}</strong></Card.Subtitle>
                <Card.Text className={ alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.color}) } > <strong>Status: </strong>{dataHost.plugin_output}</Card.Text>
              <div>
                    {  dataServices?.filter( (el) => el.host_name == dataHost.host_name )
                        .map( (p,i) => { 
                          return <Card.Text className={ alertData.filter( (co) => co.id == p.current_state ).map( (a) => { return a.color} )} key={i}> 
                              <strong>Service:</strong> {p.service_description}  &nbsp; 
                              <strong>Status:</strong> { alertData.filter( (co) => co.id == p.current_state ).map( (a) => { return a.name} )}
                          </Card.Text> })
                    }
                </div> <br />
                <div className="m-0 p-0" ><Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link></div>
              </Card.Body>
            </Card>
    </>
  )
}

export default CardComponent