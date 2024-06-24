import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../context/Context.jsx';

const RtuPage = () => {
  const { localdatos } = useContext(Context);
  const { hostname } = useParams();  
  return (
    <div>
        <iframe 
            width="1000"
            height="500"
            src={ localdatos.filter( (name) => name.hostname == hostname ).map( (d) => { return "http://"+d.ipadd}) }
            title="RTU de sitio SFM4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
  )
}

export default RtuPage