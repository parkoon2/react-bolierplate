import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ to, title, color, ...rest }) => <div className="link">
    <Link {...rest} to={to} style={{
        color
    }}>
        {title}
    </Link>
</div>

export default LinkButton