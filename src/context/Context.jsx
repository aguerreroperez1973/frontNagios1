import { createContext, useState, useEffect } from 'react'

export const Context = createContext({});

const ContextProvider = ({ children }) => {

    const url= "./../../public/status.json";
    const [dataHosts, setDataHosts] = useState([]);
    const [dataServices, setDataServices] = useState([]);
    
        const consultarApi = async () => {  
            await fetch(url)
            .then((response) => response.json())
            .then((data) => { 
                //console.log(data)
                setDataHosts(data.hosts)
                setDataServices(data.services)})
            .catch((err) => {console.log(err);})
        };
            
      useEffect(() => { consultarApi(); }, []);
      
          return (
                  < Context.Provider value={{dataHosts, dataServices}} > {children} </Context.Provider>
          )
///////////   
}

export default ContextProvider