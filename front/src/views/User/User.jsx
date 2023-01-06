import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/users').catch(err => {
                console.error(err)
            }).then(response => {
                console.log(response.data[0])
                setUserInfo(response.data[0]);
            })
    }, [])
    return (
        <div>
            {userInfo !== null &&
                userInfo.name
            }
        </div>
    )
}

export default User