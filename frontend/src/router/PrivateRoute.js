import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import fakeAuth from "../helper/auth";


function PrivateRoute({ children, ...rest }) {

    if (!fakeAuth.isAuthenticated) alert('권한이 없습니다...')

    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute