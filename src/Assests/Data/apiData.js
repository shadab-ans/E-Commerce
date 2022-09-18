import  {useState} from 'react'
import axios from 'axios'

const ApiData = () => {
    const[data, setData] = useState('');
    axios.get('https://api.mocki.io/v1/5c98d851-2c74-43a6-86b3-8e0d19a22cee')
    .then(res=>setData(res))
    console.log('ApiData :', data)
}

ApiData();