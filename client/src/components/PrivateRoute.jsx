import React from "react"
import { Route } from "react-router-dom"
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Navigate to="/login" replace={true} /> 
      }}
    ></Route>
  )
}


// export default function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={() => auth
//         ? children
//         : <Navigate to="/login" />
//       }
//     />
//   );
// }
