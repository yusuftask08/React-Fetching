import {
    useEffect, useState
} from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(_ => _.json())
            .then(_ => setUsers(_))
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
