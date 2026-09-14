export async function onRequest(context) {
  // Cloudflare detecta el país en sus servidores de forma nativa
  const country = context.request.cf?.country;

  // Si el visitante es de Venezuela (VE), le devolvemos un Error 403 nativo en inglés
  if (country === 'VE') {
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>403 Forbidden</title>
          <style>
              body { background-color: #ffffff; color: #000000; font-family: -apple-system, sans-serif; margin: 40px; }
              h1 { font-size: 24px; font-weight: 500; margin-bottom: 8px; }
              p { font-size: 14px; margin-top: 0; }
              hr { border: 0; border-top: 1px solid #eeeeee; margin: 20px 0; }
              .footer { font-size: 13px; color: #555555; font-style: italic; }
          </style>
      </head>
      <body>
          <h1>403 Forbidden</h1>
          <p>Access to this resource on the server is denied!</p>
          <hr>
          <div class="footer">Cloudflare-nginx / Pages Environment</div>
      </body>
      </html>`,
      {
        status: 403,
        headers: { "Content-Type": "text/html; charset=UTF-8" }
      }
    );
  }

  // Si no es de Venezuela, la página carga común y corriente
  return context.next();
}
