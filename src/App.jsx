
import React, { useState } from 'react';

const ADMIN_PIN = '0000';

export default function App() {
  const [pin, setPin] = useState('');
  const [userType, setUserType] = useState(null); // 'admin' o 'cliente'
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setUserType('admin');
      setError(null);
    } else if (/^\d{4}$/.test(pin)) {
      setUserType('cliente');
      setError(null);
    } else {
      setError('PIN inválido. Debe tener 4 dígitos.');
    }
  };

  const reset = () => {
    setPin('');
    setUserType(null);
    setError(null);
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      {!userType && (
        <>
          <h1>Bienvenido a tu Banco</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="PIN de 4 dígitos"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              style={{ fontSize: '1.2rem', padding: '0.5rem', width: '80%', marginBottom: '1rem' }}
            />
            <br />
            <button type="submit" style={{ padding: '0.5rem 1rem' }}>Entrar</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}

      {userType === 'admin' && (
        <>
          <h2>Panel Administrador</h2>
          <p>Bienvenido, administrador.</p>
          <button onClick={reset}>Salir</button>
        </>
      )}

      {userType === 'cliente' && (
        <>
          <h2>Panel de Cliente</h2>
          <p>PIN ingresado: {pin}</p>
          <p>Aquí verás tus préstamos, pagos y estado de cuenta.</p>
          <button onClick={reset}>Salir</button>
        </>
      )}
    </div>
  );
}
