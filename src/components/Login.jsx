import { useLayoutEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-user";

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const { signInWithEmailAndPassword, isAuthenticated,isPending } = useAuth();
  const { from } = location.state || { from: { pathname: "/" } };

  useLayoutEffect(() => {
    if (isAuthenticated) {
      history.replace(from);
    }
  }, [isAuthenticated, from, history]);
  return (
    <>
      {isPending ? (
        <p>'loading'</p>
      ) : (
        <button onClick={() => signInWithEmailAndPassword("ali", 1)}>
          login
        </button>
      )}{" "}
    </>
  );
}
