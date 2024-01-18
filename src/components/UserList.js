import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const apiEndPoint = "https://api.github.com/users";
export default function UserList() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        try {
            const response = await axios.get(apiEndPoint);
            const users = response.data;
            setUsers(users);
        } catch (error) {
            console.log("error", error)
        }
    }
    useEffect(() => {
        fetchUsers();
    },[]);

  return (
    <div>
        <h1> Users </h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}><Link to={`/user/${user.id}`}>{user.login}</Link></li>
            ))}
        </ul>
    </div>
  )
}
