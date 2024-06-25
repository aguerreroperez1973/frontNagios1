import { createContext, useState, useEffect } from 'react'

export const Context = createContext({});

const ContextProvider = ({ children }) => {

    const url= "./../../status.json";
    //const url= "./status.json";
    const [dataHosts, setDataHosts] = useState([]);
    const [dataServices, setDataServices] = useState([]);
    const [localdatos] = useState([
        {id:0, hostname:"RTU_SFM4", img:"RTU_SFM4.png", ipadd:"192.168.0.240"},
        {id:1, hostname:"RTU_SFM3", img:"RTU_SFM3.png", ipadd:"192.168.0.241"},
        {id:2, hostname:"NAGIOS", img:"NAGIOS.png", ipadd:"192.168.0.12/nagios"}
    ])

    const dataSite = [
        {id:0, host_name:'SFM1', current_state:4},
        {id:1, host_name:'SFM2',  current_state:4},
        {id:2, host_name:'VALVULAS1',  current_state:4},
        {id:3, host_name:'VALVULAS2',  current_state:4},
        {id:4, host_name:'VALVULAS3',  current_state:4},
        {id:5, host_name:'SFM3',  current_state:4},
      ]

    const alertData = [
        {id:0, name:'OK', color:'alert alert-success', subname:'UP'},
        {id:1, name:'WARNING', color:'alert alert-warning', subname:'DOWN'},
        {id:2, name:'CRITICAL', color:'alert alert-danger', subname:'DOWN'},
        {id:3, name:'UNKNOWN', color:'alert alert-danger', subname:'DOWN'},
        {id:4, name:'PENDING', color:'alert alert-info', subname:'DOWN'}
      ]
    
        const consultarApi = async () => {  
            await fetch(url)
            .then((response) => response.json())
            .then((data) => { 
                setDataHosts(data.hosts)
                setDataServices(data.services)
                //console.log(data.hosts)
                //console.log(data.services)
            })
            .catch((err) => {console.log(err);})
        };
            
      useEffect(() => { consultarApi(); }, []);

      setTimeout(()=>{ consultarApi(); }, 10000);
      
          return (
                  < Context.Provider value={{dataHosts, dataServices, localdatos, dataSite, alertData}} > {children} </Context.Provider>
          )
///////////   
}

export default ContextProvider