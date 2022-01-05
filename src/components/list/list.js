import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function List() {
    const [data, setData] = useState([]);
    const [jobs, setJobs] = useState([{
        'JvId': '',
        'JobTitle': 'Loading...',
        'Location': ''
    }]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
              '/jobs',
            );
            setData(result.data);
            setJobs(result.data.Jobs);
          };
          fetchData();
    }, []);
    return (
        <ul>
            {jobs.map(item => (
                <li key={item['JvId']}>
                <h3>
                {item['JobTitle']}              
                </h3>
                <p>{item['Location']}</p>
                </li>
            ))}
        </ul>
    );
}

export default List;