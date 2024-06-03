import { createContext, useState, useEffect } from 'react'

export const Context = createContext({});

const ContextProvider = ({ children }) => {

    const url= './../../public/status.json';
    const [dataHosts, setDataHosts] = useState([]);
    const [dataServices, setDataServices] = useState([]);
    
        
        const consultarApi = async () => {  
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data.hosts)
            setDataHosts(data.hosts)
            setDataServices(data.services)
        };
            
      useEffect(() => { consultarApi(); }, []);
      
          return (
                  < Context.Provider value={{dataHosts, dataServices}} > {children} </Context.Provider>
          )
///////////   
}

export default ContextProvider