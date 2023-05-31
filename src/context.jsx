import { data } from "autoprefixer";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import axios from 'axios'

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {

  const [result, setResult] = useState([]) 
  const [loading, setLoading] = useState(true)

  const [searchedText, setSearchedText]= useState('angle')
  const fetchData = async (text) => {
    setLoading(true)
    try {
     
   
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/
    `)
        .then(data => data.json()).then(data => setResult(data))
      
      
     


      // setResult(words)
    }
    catch (error) {
      console.log(error)
    }

    setTimeout(()=>{setLoading(false)},1000)

    
  
  
  }

  useEffect(() => {
    fetchData(searchedText)
  }, [])

 
  const value = {
    result,
    searchedText ,
    setSearchedText,
    loading,
    setLoading
    
  }
  

  return (
    <DataContext.Provider value={value}>
      
      {children}

  </DataContext.Provider>
    

  )
}


export const DataConsume = ()=> useContext(DataContext)

