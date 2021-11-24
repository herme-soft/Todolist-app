import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'

export default function Item(props) {
    return (
        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
            {props.txt}
            <RiDeleteBin5Line onClick={e => props.delFunc(props.id)} className="trash" />
        </li>
    )
}
