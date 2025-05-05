import React from 'react';
import type { Info } from '../types';

type UserInfoProp = {
    user: Info;
}

export const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
    return (
        <div>
            <h3>User Information</h3>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>qweqweqweqweqwqweqw</p>
        </div>
    )
};