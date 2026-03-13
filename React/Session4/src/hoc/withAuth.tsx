// import { useAuth } from "../context/useAuth";
// import {Navigate} from 'react-router-dom';
// type User = {
//   name: string;
//   role: string;
// };
// function withAuth<P>(WrappedComponent: React.ComponentType<P> & { user: User | null }){
//     return function AuthComponent(props:P){
//         const { user, isAuthenticated, isLoading} = useAuth();
//         if(isLoading){
//             return <p>Loading...</p>
//         }
//         if(!isAuthenticated){
//             return <Navigate to="/login" replace />;
//         }
//         return <WrappedComponent {...props} user={user}/>
  

 
    
//     }
// }
// export default withAuth;


import { useAuth } from "../context/useAuth";
import { Navigate } from "react-router-dom";

type User = {
  name: string;
  role: string;
};

function withAuth<P>(
  WrappedComponent: React.ComponentType<P & { user: User | null }>
) {
  return function AuthComponent(props: P) {
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} user={user} />;
  };
}

export default withAuth;