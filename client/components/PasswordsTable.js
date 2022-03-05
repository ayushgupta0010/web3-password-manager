import React from "react";
import Password from "./Password";

const PasswordsTable = ({ passwords }) => (
  <>
    {passwords.length !== 0 ? (
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col' className='text-secondary'>
              #
            </th>
            <th scope='col' className='text-secondary'>
              URL
            </th>
            <th scope='col' className='text-secondary'>
              Username
            </th>
            <th scope='col' className='text-secondary'>
              Password
            </th>
            <th scope='col' className='text-secondary'>
              Update
            </th>
          </tr>
        </thead>
        <tbody>
          {passwords.map((password, i) => (
            <Password
              key={i}
              _index={i}
              _url={password.url}
              _username={password.username}
              _password={password.password}
            />
          ))}
        </tbody>
      </table>
    ) : (
      <p className='text-center text-light'>No passwords</p>
    )}
  </>
);

export default PasswordsTable;
