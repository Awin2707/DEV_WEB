import React, { useState } from 'react'
import main from '../Style/main.module.css';
import NavBar from '../Component/NavBar';

function Main() {

    const [maintaince, setmaintaince] = useState(true)

    return (
        <div className={main.main}>
            <NavBar />
            {
                maintaince ? (
                    <div className={main.haeder}>
                        this page is under maintaince
                    </div>
                ) : null
            }
        </div>
    )
}

export default Main