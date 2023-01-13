import React from 'react'

const input = (props) => {
    return (
        <>
            <label className="text-gray-600 mb-2 block" style={{ fontSize: '14px' }}>{props.title}</label>
            <input
                type= {props.type}
                name={props.name}
                value = {props.value}
                onChange = {props.onChange}
                className="block w-full border border-gray-300 px-3 py-2 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder={props.placeholder}/>
        </>
    )
}

export default input