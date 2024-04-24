import { useEffect, createContext, useState } from "react"
import axios from 'axios'

export const Context = createContext({
    tech:JSON,
    getTech: () => {}
})

export function ContextProvider({children}) {

    const [tech, setTech] = useState([]);
    


    // useEffect(()=>{
    //     const fetchAllUsers = async ()=>{
    //       try{
    //         const siteId = [parsePath(window.location.href)];
    //         console.log("site id for user navigation = ", params.id);
    //         const res = await axios.get("http://localhost:8081/generaluser/"+params.id);
    //         setUsers(res.data);
    //       }catch(err){
    //         console.log(err)
    //       }
    //     }
    //     fetchAllUsers()
    //   },[])

    async function getTech(id) {
        if(!tech || tech.length === 0 || tech.idTech != id){
            const res = await axios.get("http://localhost:8081/tech/"+id)

            setTech(res.data)
            localStorage.setItem("tech",JSON.stringify(res.data))
            console.log("local storage ",JSON.parse(localStorage.getItem("tech")));
        }
    }
    console.log("local storage outside logi",JSON.parse(localStorage.getItem("tech")));

    // if((!tech || tech.length === 0) && (localStorage.getItem("tech"))){
    //     console.log("setting tech if !tech or tech === 0")
    //     setTech(JSON.parse(localStorage.getItem("tech")))
    // }

    

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