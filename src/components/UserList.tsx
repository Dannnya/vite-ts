import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export const UserList = () => {
    const [ user, setUser ] = useState<User[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string | null >(null);
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                };
                const data: User[] = await response.json();
                setUser(data);

            } catch (error) {
                setError(error instanceof Error ? error.message : 'An error the ');
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, []);

    if (loading) {
        return <h3>Error: { error }</h3>
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {user.map(({ id, name, username, email, phone}) => (
                    <tr key={id}>
                        <td>{ name }</td>
                        <td>{ username }</td>
                        <td>{ email }</td>
                        <td>{ phone }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};
