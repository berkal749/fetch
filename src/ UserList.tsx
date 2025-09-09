import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

export default function () {
    const [listOfUSer, setListOfUSer] = useState<string[]>([])
    function manageData(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setListOfUSer(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }

useEffect(() => {
    manageData()
}, [])


    return (<div className="flex flex-col gap-3 border-4 justify-center items-center h-screen">

        {listOfUSer.map(user => (
            <div key={user.id}>{user.name}</div>
        ))}

    </div>)

}
