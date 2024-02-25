const cacheVersion = 'v1';
const cacheList = [ 'index.html', '/offline.html'];

const backendOrigins = ['https://roomar-backend.onrender.com/api/v1'];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheVersion)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(cacheList);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    // Check if the request is from a specified backend origin
    const isBackendRequest = backendOrigins.some((origin) => event.request.url.includes(origin));

    event.respondWith(
        // Bypass the service worker for backend requests
        isBackendRequest
            ? fetch(event.request)
            : caches.match(event.request)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    if (event.request.method === 'GET') {
                        return fetch(event.request)
                            .then((networkResponse) => {
                                // Clone the response before caching and returning
                                const clonedResponse = networkResponse.clone();
                                caches.open(cacheVersion)
                                    .then((cache) => {
                                        cache.put(event.request, clonedResponse);
                                    });
                                return networkResponse;
                            })
                            .catch(() => caches.match('/offline.html'));
                    }

                    // Handle non-GET requests here if needed

                })
    );
});


// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(cacheVersion);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});
