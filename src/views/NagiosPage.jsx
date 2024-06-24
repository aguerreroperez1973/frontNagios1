import React from 'react'
import { useParams } from 'react-router-dom';
import { Context } from './../context/Context.jsx';

const NagiosPage = () => {
  //const nagios="http://incotel.ddns.net:8081/nagios/cgi-bin/status.cgi?host=";
  const nagios="http://192.168.0.12/nagios/cgi-bin/status.cgi?host=";
  const { hostname } = useParams();
  console.log(hostname)
  return (
    <div>
        <iframe 
            width="1000"
            height="500"
            src={nagios+hostname}
            title="RTU WEB"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
  )
}

export default NagiosPage