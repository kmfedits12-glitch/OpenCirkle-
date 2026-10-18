// Temporary placeholder entry point.
// The OpenCirkle application source (src/) was never committed to this repository.
// Replace this file with the real src/ folder from the original project.
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

function Placeholder() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        background: '#050A18',
        color: '#F1F8FF',
      }}
    >
      <div
        style={{
          maxWidth: 520,
          padding: '2rem',
          borderRadius: 16,
          background: '#071A38',
          border: '1px solid rgba(22, 139, 255, 0.35)',
          boxShadow: '0 0 40px rgba(22, 139, 255, 0.15)',
          textAlign: 'center',
        }}
      >
        <h1 style={{margin: '0 0 0.75rem', color: '#8DDCFF', fontSize: '1.75rem'}}>OpenCirkle</h1>
        <p style={{margin: 0, color: '#A8BCD7', lineHeight: 1.6}}>
          We're setting things up. Please check back soon.
        </p>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Placeholder />
  </StrictMode>,
);
