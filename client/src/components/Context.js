import { useEffect, createContext, useState } from "react"
import axios from 'axios'

export const Context = createContext({
    tech:JSON,
    getTech: () => {}
})

export function ContextProvider({children}) {

    const [tech, setTech] = useState([]);
    
    //This use of context was a failed attempt to create a means of semi-persistent data to be used for the
    //rest of the project

    //Still may use it for themeing for tech vs. admin user experiences

    async function getTech(id) {
        if(!tech || tech.length === 0 || tech.idTech !== id){
            const res = await axios.get("http://localhost:8081/login/"+id)

            setTech(res.data)
            localStorage.setItem("tech",JSON.stringify(res.data))
            console.log("local storage ",JSON.parse(localStorage.getItem("tech")));
            return console.log("tech from return",JSON.stringify(tech))
        }
    }
    console.log("local storage outside logi",JSON.parse(localStorage.getItem("tech")));


    const contextValue = {
        tech,
        getTech
    }
    
    return(
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider