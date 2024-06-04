import React, { useEffect, useState } from 'react'
const PREFIX = "Shoaib-Ch"
export default function useLocalStorage(key, initialvalue) {
    const prefixedkey= PREFIX + key;
    const[value, setValue] = useState(()=>{
        const jasonvalue = localStorage.getItem(prefixedkey);
        if(jasonvalue != null) return JSON.parse(jasonvalue);
        if( typeof initialvalue === 'function'){
            return initialvalue();
        }
        else{
            return initialvalue;
        }
    })
    useEffect(()=>{
        localStorage.setItem(prefixedkey, JSON.stringify(value));
    },[prefixedkey, value]);
  return [value, setValue];
}
