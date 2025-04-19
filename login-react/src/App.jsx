import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      setMessage('✅ Login bem-sucedido!');
    } else {
      setMessage('❌ Usuário ou senha inválidos.');
    }
  };

  return (
    <div className="container">
      <h1>Login Project</h1>
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Acessar</button>
        {message && (
  <p style={{ color: message.includes('✅') ? 'green' : 'red' }}>
    {message}
  </p>
)}

      </div>
    </div>
  );
}

export default App;

