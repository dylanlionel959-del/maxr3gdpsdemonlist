export async function onRequest(context) {
  // Detecta el código de país de la IP a nivel de servidor de Cloudflare
  const country = context.request.cf?.country;

  // Si el visitante es de Venezuela (VE), interceptamos la conexión
  if (country === 'VE') {
    const url = new URL(context.request.url);
    
    // Busca y lee el archivo HTML local que creamos para el error
    const errorPage = await context.env.ASSETS.fetch(new URL('/error403.html', url.origin));
    
    // Devuelve el HTML con código de estado 403 Forbidden
    return new Response(errorPage.body, {
      status: 403,
      headers: { "Content-Type": "text/html; charset=UTF-8" }
    });
  }

  // Si no es de Venezuela, permite que la Demon List cargue normalmente
  return context.next();
}
