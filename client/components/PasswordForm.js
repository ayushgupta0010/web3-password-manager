import React, { useContext, useState } from "react";
import { PasswordManagerContext } from "../context/PasswordManagementContext";

const PasswordForm = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { addPassword } = useContext(PasswordManagerContext);

  const submit = (e) => {
    e.preventDefault();
    addPassword(url, username, password).then(() => {
      setUrl("");
      setUsername("");
      setPassword("");
    });
  };

  return (
    <div className='box'>
      <form onSubmit={submit}>
        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control bg-transparent border-secondary text-light'
            placeholder='URL'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label htmlFor='floatingInput' className='text-secondary'>
            URL
          </label>
        </div>

        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control bg-transparent border-secondary text-light'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor='floatingInput' className='text-secondary'>
            Username
          </label>
        </div>

        <div className='form-floating mb-3'>
          <input
            type='password'
            className='form-control bg-transparent border-secondary text-light'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor='floatingPassword' className='text-secondary'>
            Password
          </label>
        </div>
        <div className='text-center'>
          <button className='btn btn-sm btn-success w-100'>Add Password</button>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
