import React, { useState, useContext } from "react";
import { PasswordManagerContext } from "../context/PasswordManagementContext";

const Password = ({ _index, _url, _username, _password }) => {
  const [url, setUrl] = useState(_url);
  const [username, setUsername] = useState(_username);
  const [password, setPassword] = useState(_password);
  const [editMode, setEditMode] = useState(false);
  const [defaultData, setDefaultData] = useState({
    url: _url,
    username: _username,
    password: _password,
  });

  const { updatePassword } = useContext(PasswordManagerContext);

  const save = () => {
    updatePassword(_index, url, username, password).then(() => {
      setDefaultData({ url, username, password });
      setEditMode(false);
    });
  };

  const cancel = () => {
    setUrl(defaultData.url);
    setUsername(defaultData.username);
    setPassword(defaultData.password);
    setEditMode(false);
  };

  return (
    <tr>
      <th className='text-secondary'>{_index} </th>
      <td>
        <input
          className='bg-transparent border-0 text-light'
          type='text'
          placeholder='URL'
          value={url}
          disabled={!editMode}
          onChange={(e) => setUrl(e.target.value)}
        />
      </td>
      <td>
        <input
          className='bg-transparent border-0 text-light'
          type='text'
          placeholder='Username'
          value={username}
          disabled={!editMode}
          onChange={(e) => setUsername(e.target.value)}
        />
      </td>
      <td>
        <input
          className='bg-transparent border-0 text-light'
          type='text'
          placeholder='Password'
          value={password}
          disabled={!editMode}
          onChange={(e) => setPassword(e.target.value)}
        />
      </td>
      <td>
        {!editMode ? (
          <button
            className='btn btn-sm btn-outline-primary'
            onClick={() => setEditMode(true)}>
            Update
          </button>
        ) : (
          <div>
            <button
              className='btn btn-sm btn-outline-success me-3'
              onClick={save}>
              Save
            </button>
            <button className='btn btn-sm btn-outline-danger' onClick={cancel}>
              Cancel
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Password;
