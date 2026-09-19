export async function onRequest(context) {
  // Lista de códigos ISO de países que deseas bloquear (ej: 'US' para Estados Unidos, 'CN' para China)
  const paisesBloqueados = ['KP', 'JP', 'RU', 'CN', 'VN', 'BR', 'IN', 'IR', 'IQ', 'SA', 'AE', 'EG', 'SY', 'TR', 'BY', 'RO', 'PK', 'ID', 'TH'];

  // Cloudflare detecta automáticamente el país del visitante
  const codigoPais = context.request.cf ? context.request.cf.country : null;

  if (codigoPais && paisesBloqueados.includes(codigoPais)) {
    
    // Tu HTML personalizado optimizado para servirse desde el Edge de Cloudflare
    const htmlPersonalizado = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>403 Forbidden - Maxr3 GDPS Demon List</title>
        <style>
            body { font-family: sans-serif; padding: 20px; background-color: #fafafa; color: #333; }
            hr { border: 0; border-top: 1px solid #ccc; }
        </style>
    </head>
    <body>

        <h1>403 Forbidden</h1>
        <h2>Maxr3 GDPS Demon List</h2>
        
        <p>Access Denied. You do not have permission to access this resource on the server.</p>
        
        <hr>
        
        <p><strong>Error Code:</strong> 403</p>
        <p><strong>Request ID:</strong> <span id="request-id">Generating...</span></p>

        <script>
            function generateRequestId(length) {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                const charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            document.getElementById('request-id').textContent = generateRequestId(64);
        </script>

    </body>
    </html>
    `;

    // Retorna tu página web con el estado de seguridad correcto (403)
    return new Response(htmlPersonalizado, {
      status: 403,
      headers: { 
        "Content-Type": "text/html; charset=utf-8" 
      },
    });
  }

  // Si el país no está bloqueado, el sitio web carga normalmente
  return context.next();
}
