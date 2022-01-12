import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Typography} from '@mui/material'; 

const navigate = (url) =>{
    window.open(url);
};

function JobList() {
        
        // const [data, setData] = useState([]);
        const [data, setData] = useState({ 
            Jobs: [{
                'JvId': ' ',
                'JobTitle': 'Loading...',
                'Company': ' ',
                'URL': ' ',
                'Location': ' '
            }]
        });
        useEffect(() => {
            const fetchData = async () => {    
                const result = await axios(
                    'http://localhost:5000/jobs',
                    );
                return await result.data;
            };
            fetchData().then((data) => {
                console.log(data);
                setData(data);
            });
        }, []);

   
    return (
        <ul>
            {data.Jobs.map(item => (
             <li key={item['JvId']}>
                 <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    {item['JobTitle']}
                    </Typography>
                    <br></br>
                    <Typography variant="body2">
                    {item['Company']}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item['Location']}
                    </Typography>
                </CardContent>
                { item['JvId'] !== ' ' && <CardActions>
                    <Button 
                        size="small" 
                        onClick={() => { navigate(item['URL'])}}
                        >
                            Learn More
                    </Button>
                </CardActions>}
                </Card>
             </li>
            ))}
        </ul>
    );
}

export default JobList;