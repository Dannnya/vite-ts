import type { AdminInfo } from '../types';
import React from 'react';

type AdminInfoProps = {
    admin: AdminInfo;
}


export const Admin: React.FC<AdminInfoProps> = ({ admin: { id, name, email, role, lastLogin } }) => {
    return (
        <div>
            <h3>Admin Information</h3>
            <p>ID: { id }</p>
            <p>Name: { name }</p>
            <p>Email: { email }</p>
            <p>Role: { role }</p>
            <p>lastLogin: { lastLogin.toLocaleTimeString() }</p>
        </div>
    )
};