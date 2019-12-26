import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ to, title, color }) => <div className="link">
    <Link to={to} style={{
        color
    }}>
        {title}
    </Link>
</div>

export default LinkButton