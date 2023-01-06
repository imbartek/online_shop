import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        axios.get('/users')
            .catch(err => {
                console.error(err)
            }).then(response => {
                console.log(response.data)
                setUserInfo(response.data);
            })
    })
    return (
        <div>
            {userInfo}
        </div>
    )
}

export default User