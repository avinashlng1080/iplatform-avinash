const apiKEY = '763547e353c4370eaea6fb10bcf5c1a6'
export const rootURL = 'http://ws.audioscrobbler.com/2.0/'

// http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=jackson&api_key=763547e353c4370eaea6fb10bcf5c1a6&format=json
export const getSimilarArtistURL = (artistName: string) =>  `${rootURL}?method=artist.getsimilar&artist=${artistName}&api_key=${apiKEY}&format=json`

