import type { AdminInfo } from '../types';
import React from 'react';

type AdminInfoProps = {
    admin: AdminInfo;
}


export const Admin: React.FC<AdminInfoProps> = ({ admin }) => {
    return (
        <div>
            <h3>Admin Information</h3>
            <p>ID: {admin.id}</p>
            <p>Name: {admin.name}</p>
            <p>Email: {admin.email}</p>
            <p>Role: {admin.role}</p>
            <p>lastLogin: {admin.lastLogin.toLocaleTimeString()}</p>
        </div>
    )
};