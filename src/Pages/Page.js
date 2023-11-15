import React, { useEffect, useRef, useState } from 'react'
import '../styles/Cv1style.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

export default function Page() {
    return(
    <div>
        <Link to="/cv1">FIRST PAGE CV</Link>
        <br/>
        <Link to="/profile">SECOND PAGE PROFILE</Link>
        <br/>
        <Link to="/jobs">third PAGE jobs</Link>
    </div>)
}