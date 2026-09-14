export async function onRequest(context) {
  const country = context.request.cf?.country;

  // Si la petición viene de Venezuela, Cloudflare responde con el archivo HTML de error
  if (country === 'VE') {
    const url = new URL(context.request.url);
    
    // Busca el archivo error403.html en los archivos estáticos de tu proyecto
    const errorPage = await context.env.ASSETS.fetch(new URL('/error403.html', url.origin));
    
    return new Response(errorPage.body, {
      status: 403,
      headers: { "Content-Type": "text/html; charset=UTF-8" }
    });
  }

  // Si no es Venezuela, continúa cargando la Demon List con normalidad
  return context.next();
}
