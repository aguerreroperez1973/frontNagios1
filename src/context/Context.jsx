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
                  < Context.Provider value={{dataHosts, dataServices, localdatos}} > {children} </Context.Provider>
          )
///////////   
}

export default ContextProvider