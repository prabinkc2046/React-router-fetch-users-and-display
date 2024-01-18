import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function User() {
    const [user, setUser] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        const apiEndPoint = `https://api.github.com/user/${id}`
        const fetchUser = async () => {
            const response = await axios.get(apiEndPoint);
            const user = response.data;
            setUser(user);
        };
        fetchUser();
    },[id])
  return (
    <div>
        <h2> User details</h2>
        <ul>
            <p>Number of public repos : {user.public_repos}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Lives at: {user.location}</p>
        </ul>
    </div>
  )
}
