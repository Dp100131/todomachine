import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [error, setError] = React.useState(false);
  
    const [loading, setLoading] = React.useState(true);
  
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
  
      setTimeout(() => {
  
        try {
  
          const localStrorageItem = localStorage.getItem(itemName);
  
          let parseItem;
  
          if(!localStrorageItem){
  
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parseItem = initialValue
  
          }else{
  
            parseItem = JSON.parse(localStrorageItem);
  
          }
  
          setItem(parseItem)
          setLoading(false)
  
        }catch(error){
  
          setError(error)
  
        }  
  
  
      }, 1000);
  
    });
  
    const saveItem = (newItem) => {
  
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem))
  
        setItem(newItem)
      }catch(error){
  
        setError(error)
  
      }
  
    }
    
    return {
      item,
      saveItem,
      loading,
      error
    }
  
  }

export {useLocalStorage};