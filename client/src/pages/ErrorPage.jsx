import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return <div>

<h1>OOps Error Page</h1>;
{error && <p>{error.data}</p>}
<NavLink to="/"><button>Go back to Home</button></NavLink>
        </div>
};
export default ErrorPage;
