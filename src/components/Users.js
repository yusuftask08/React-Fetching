import {
    useEffect, useState
} from 'react';
import axios from 'axios'
function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(_ => setUsers(_.data))
            .catch(err => console.log('err :>> ', err)).finally(() => setLoading(false))
    }, [])

    return <div>
        Users
        {isLoading && <div> Loading...</div>}

        {
            users && users.map((y) => <div key={y.id}> {y.name} </div>)
        }
    </div>;
}

export default Users;
