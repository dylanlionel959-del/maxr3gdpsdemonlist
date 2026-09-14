export async function onRequest(context) {
  // Cloudflare detecta el país en sus servidores de forma nativa
  const country = context.request.cf?.country;

  // Si el visitante es de Venezuela (VE), mostramos la interfaz avanzada de error
  if (country === 'VE') {
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Access Maxr3 GDPS Demon List - Server Error</title>
          <!-- Tailwind CSS CDN -->
          <script src="https://cdn.tailwindcss.com"></script>
          <!-- Inter Font -->
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
              body {
                  font-family: 'Inter', sans-serif;
                  -webkit-tap-highlight-color: transparent;
              }

              /* Pulse animation for line status */
              .line-green {
                  background-color: #34d399;
                  box-shadow: 0 0 8px rgba(52, 211, 153, 0.6);
              }

              .line-red {
                  background-color: #f87171;
                  box-shadow: 0 0 8px rgba(248, 113, 113, 0.6);
              }

              /* Smooth page transition animation */
              .fade-enter {
                  animation: fadeIn 0.3s ease-in-out forwards;
              }

              @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(6px); }
                  to { opacity: 1; transform: translateY(0); }
              }
          </style>
      </head>
      <body class="bg-gradient-to-b from-[#1176e6] via-[#0f6ed6] to-[#0c5eb9] min-h-screen text-white flex flex-col justify-between selection:bg-blue-300 selection:text-blue-900">

          <header class="w-full bg-[#0d64c7]/40 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between text-white shadow-sm">
              <div class="flex items-center space-x-3">
                  <button class="p-1 hover:bg-white/10 rounded-full transition-colors text-white/90" title="Back">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                  </button>
                  <div>
                      <h1 class="text-base font-medium leading-tight text-white">Access Maxr3 GDPS Demon List</h1>
                      <a href="https://maxr3gdpsdemonlist.pages.dev/" target="_blank" rel="noopener noreferrer" class="text-xs text-blue-100/80 hover:text-white transition-colors font-light underline underline-offset-2">
                          maxr3gdpsdemonlist.pages.dev/
                      </a>
                  </div>
              </div>
              <div class="flex items-center space-x-2">
                  <button class="p-1.5 hover:bg-white/10 rounded-full transition-colors" title="More options">
                      <svg class="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="5" r="2"/>
                          <circle cx="12" cy="12" r="2"/>
                          <circle cx="12" cy="19" r="2"/>
                      </svg>
                  </button>
              </div>
          </header>

          <main class="flex-1 max-w-lg w-full mx-auto px-4 py-6 flex flex-col justify-center items-center fade-enter">
              
              <!-- Error Title -->
              <h2 class="text-xl sm:text-2xl font-normal text-center mb-8 tracking-wide text-white drop-shadow-sm">
                  Server error detected
              </h2>

              <div class="w-full max-w-md flex items-center justify-between px-4 mb-10">
                  
                  <!-- Device Icon -->
                  <div class="flex flex-col items-center group">
                      <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-3 shadow-inner transition-transform group-hover:scale-105">
                          <img src="/image_n7ie3s.png" 
                               alt="Device" 
                               class="w-10 h-10 object-contain"
                               onerror="this.onerror=null; this.src='https://placehold.co/60x60/ffffff/0f6ed6?text=DEV';" />
                      </div>
                      <span class="text-xs font-medium mt-2 text-blue-50/90 tracking-wide">Device</span>
                  </div>

                  <!-- Green Line (Connected state between Device and Browser) -->
                  <div class="flex-1 mx-2 flex flex-col items-center justify-center">
                      <div class="w-full h-[3px] line-green rounded-full relative">
                          <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-300 animate-ping"></div>
                      </div>
                  </div>

                  <!-- Browser / Network Icon -->
                  <div class="flex flex-col items-center group">
                      <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-3 shadow-inner transition-transform group-hover:scale-105">
                          <img src="/image_n4oRwf.png" 
                               alt="Browser" 
                               class="w-10 h-10 object-contain invert"
                               onerror="this.onerror=null; this.src='https://placehold.co/60x60/ffffff/0f6ed6?text=NAV';" />
                      </div>
                      <span class="text-xs font-medium mt-2 text-blue-50/90 tracking-wide">Browser</span>
                  </div>

                  <!-- Red Line (Disconnected state between Browser and Server) -->
                  <div class="flex-1 mx-2 flex flex-col items-center justify-center">
                      <div class="w-full h-[3px] line-red rounded-full relative">
                          <div class="absolute -top-1.5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold shadow-md">
                              ✕
                          </div>
                      </div>
                  </div>

                  <!-- Server Icon -->
                  <div class="flex flex-col items-center group">
                      <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/10 backdrop-blur-sm border border-red-300/30 flex items-center justify-center p-3 shadow-inner transition-transform group-hover:scale-105 relative">
                          <img src="/image_wFo8bV.png" 
                               alt="Server" 
                               class="w-10 h-10 object-contain"
                               onerror="this.onerror=null; this.src='https://placehold.co/60x60/ffffff/0f6ed6?text=SRV';" />
                          <span class="absolute -top-1 -right-1 flex h-3 w-3">
                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                          </span>
                      </div>
                      <span class="text-xs font-medium mt-2 text-red-200 tracking-wide">Server</span>
                  </div>

              </div>

              <div class="w-full bg-[#0b5bb8]/70 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl border border-white/15 space-y-5 text-left">
                  
                  <!-- Card Header -->
                  <div class="border-b border-white/10 pb-3">
                      <h3 class="text-base sm:text-lg font-semibold text-white tracking-wide">
                          The server rejected the connection
                      </h3>
                  </div>

                  <!-- Reasons and Solutions -->
                  <div class="space-y-4 text-sm">
                      <div class="bg-black/10 p-3 rounded-xl border border-white/5">
                          <div class="flex items-start space-x-2 mb-1">
                              <span class="text-blue-200 font-medium shrink-0">Possible reasons:</span>
                              <span class="text-white font-normal">The server may not support your country</span>
                          </div>
                          <div class="flex items-start space-x-2">
                              <span class="text-emerald-300 font-medium shrink-0">Solution:</span>
                              <span class="text-white font-semibold">Switch your country or use a VPN</span>
                          </div>
                      </div>

                      <div class="bg-black/10 p-3 rounded-xl border border-white/5">
                          <div class="flex items-start space-x-2 mb-1">
                              <span class="text-blue-200 font-medium shrink-0">Possible reasons:</span>
                              <span class="text-white font-normal">GeoIP restriction configuration error</span>
                          </div>
                          <div class="flex items-start space-x-2">
                              <span class="text-emerald-300 font-medium shrink-0">Solution:</span>
                              <span class="text-white font-semibold">Use VPN or Change other country.</span>
                          </div>
                      </div>
                      
