export async function onRequest(context) {
  // Cloudflare detecta el país en sus servidores de forma nativa
  const country = context.request.cf?.country;

  // Si el visitante es de Venezuela (VE), mostramos la interfaz personalizada
  if (country === 'VE') {
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Access Maxr3 GDPS Demon List - Server Error</title>
          <style>
              body {
                  background-color: #0b0c10;
                  color: #c5c6c7;
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  margin: 0;
                  padding: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
              }
              .container {
                  background-color: #1f2833;
                  padding: 30px;
                  border-radius: 12px;
                  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
                  max-width: 500px;
                  width: 90%;
                  text-align: center;
                  border: 1px solid #45a29e;
              }
              h1 {
                  color: #66fcf1;
                  font-size: 24px;
                  margin-bottom: 5px;
              }
              .url-display {
                  color: #858585;
                  font-size: 14px;
                  margin-bottom: 25px;
              }
              h2 {
                  color: #ff4d4d;
                  font-size: 18px;
                  margin-bottom: 20px;
              }
              .status-flow {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin: 20px auto;
                  max-width: 350px;
              }
              .node {
                  font-size: 14px;
                  color: #45a29e;
              }
              .node.error {
                  color: #ff4d4d;
              }
              .reason-box {
                  background-color: #0b0c10;
                  padding: 15px;
                  border-radius: 6px;
                  text-align: left;
                  margin-bottom: 15px;
                  border-left: 4px solid #ff4d4d;
              }
              .reason-box p {
                  margin: 5px 0;
                  font-size: 14px;
              }
              .reason-box strong {
                  color: #66fcf1;
              }
              .footer {
                  font-size: 12px;
                  color: #66fcf1;
                  margin-top: 25px;
                  opacity: 0.7;
              }
              .warning {
                  color: #ffcc00;
                  font-size: 13px;
                  margin-top: 15px;
                  animation: blink 1.5s infinite;
              }
              @keyframes blink {
                  50% { opacity: 0.5; }
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Access Maxr3 GDPS Demon List</h1>
              <div class="url-display">maxr3gdpsdemonlist.pages.dev/</div>
              
              <h2>Server error detected</h2>
              
              <div class="status-flow">
                  <div class="node">Device 🟢</div>
                  <div class="node">Browser 🟢</div>
                  <div class="node error">✕ Server 🔴</div>
              </div>
              
              <div class="reason-box">
                  <p><strong>Possible reasons:</strong> The server may not support your country</p>
                  <p><strong>Solution:</strong> Switch your country or use a VPN</p>
              </div>
              
              <div class="reason-box">
                  <p><strong>Possible reasons:</strong> GeoIP restriction configuration error</p>
                  <p><strong>Solution:</strong> Use VPN or Change other country.</p>
              </div>
              
              <div class="warning">⚠ Re-checking connection...</div>
              
              <div class="footer">
                  Version: Maxr3 GDPS Demon List Server v1.0.0-Release<br>
                  Maxr3 GDPS 2026 ©
              </div>
          </div>
      </body>
      </html>`,
      {
        status: 403,
        headers: { "Content-Type": "text/html; charset=UTF-8" }
      }
    );
  }

  // Si la petición no es de Venezuela, el sitio web carga con normalidad
  return context.next();
}
