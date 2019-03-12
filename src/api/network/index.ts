const apiKEY = '763547e353c4370eaea6fb10bcf5c1a6'
export const rootURL = 'http://ws.audioscrobbler.com/2.0/'

// NOTE: for convenience sake, limits search for similar artists to 10
export const getSimilarArtistURL = (artistName: string) =>  `${rootURL}?method=artist.getsimilar&artist=${artistName}&limit=10&api_key=${apiKEY}&format=json`

// MBZ ARTIST API
export const getMBZArtistURL = (artistName: string) => `http://musicbrainz.org/ws/2/artist/?query=artist:${artistName}&fmt=json`
