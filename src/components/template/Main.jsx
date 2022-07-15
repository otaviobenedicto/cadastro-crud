import React from 'react'
import Header from './Header'

const Main = (props) => {
    return (
        <>
            <Header {...props}/>
            <main className='content container-fluid bg-white'>
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
        </>
    )
}

export default Main