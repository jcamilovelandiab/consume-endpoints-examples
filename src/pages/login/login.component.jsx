import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Login = (props) => {

  const navigate = useNavigate();
  const { updateUser } = props;
  const [documentId, setDocumentId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://test-bingomaster75.azurewebsites.net/api/customer/login', {
      documentId,
      password
    }).then( response => {
        const data = response.data;
        if(data) {
          updateUser(data.data);
          navigate("/landing", { replace: true });
        }
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleChangeDocumentId = (event) => {
    setDocumentId(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <form style={{ margin: 50, display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
      <TextField
        required
        id="outlined-required"
        label="Document"
        placeholder='Enter your document here'
        style={{ margin: 30 }}
        value={documentId}
        onChange={handleChangeDocumentId}
      />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        style={{ margin: 30 }}
        value={password}
        onChange={handleChangePassword}
      />
      <Button type="submit" variant="contained" style={{ margin: 30 }}>Iniciar Sesión</Button>
    </form>
  );
}

export default Login;