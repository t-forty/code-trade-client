import React, {useState,useEffect} from 'react';
import axios from 'axios';

function List () {
    //HOOKS
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

    //fetch data
    useEffect(() =>{
        fetch('/jobs')
            .then(res => res.json())
            .then(
                (result)=>{
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    //display data in list form
    // let jobs = items.Jobs;
  
    if(error){
        return <div>Error: {error.message}</div>
    }else if(!isLoaded){
        return <div>Loading...</div>
    }else{
        console.log(data['Jobs']);
        
        return(
            <ul>
                {/* {jobs.map(x => (
                    <li key={x["JvId"]}>hey</li>
                ))} */}
            </ul>
        );
    }
} 

export default List;