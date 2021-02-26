import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../UI/LoginForm";

import { loginAction } from "../../store/actions/action";

const Login: FC = () => {
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthDetails({
      ...authDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAction(authDetails, callBack));
  };

  const callBack = (res: any) => {
    if (res.error) {
      alert(res.error);
    }

    if (res.success) {
      alert(res.success);
    }
  };

  return (
    <LoginForm
      onChange={handleChange}
      email={authDetails.email}
      password={authDetails.password}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
