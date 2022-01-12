import React from 'react';

export default function Company() {

    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div>
            <h1>Company</h1>
            <p><strong>username: </strong>{user.username}</p>
            <p><strong>email: </strong>{user.email}</p>
        </div>
    );
};