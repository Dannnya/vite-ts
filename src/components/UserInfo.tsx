import React from 'react';
import type { Info } from '../types';

type UserInfoProp = {
    user: Info;
}

export const UserInfo: React.FC<UserInfoProp> = ({ user: { id, name, email } }) => {
    return (
        <div>
            <h3>User Information</h3>
            <p>ID: { id }</p>
            <p>Name: { name }</p>
            <p>Email: { email }</p>
        </div>
    )
};