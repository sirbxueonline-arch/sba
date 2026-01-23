'use client';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', flexDirection: 'column'}}>
            <h1 style={{fontSize: '3rem'}}>404</h1>
            <p>Page Not Found</p>
        </div>
      </body>
    </html>
  );
}
