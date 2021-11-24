import React from 'react'
import {FaReact} from 'react-icons/fa'

export default function Header() {
    return (
        <nav class="navbar navbar-light shadow-sm">
            <div class="container-fluid d-flex justify-content-center">
                <a class="navbar-brand d-flex" href="#">
                    <FaReact className="logo" />
                    <h1>Todolist React JS</h1>
                </a>
            </div>
        </nav>
    )
}
