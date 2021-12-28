import React from 'react'

export default function Title(props) {
    return (
        <div>
            <div className="flex flex-col justify-center">
                <h1 className="px-5 py-2">{props.children}</h1>
            </div>
            <hr className="border-2 border-blue-500 text-2xl" />
        </div>
    )
}