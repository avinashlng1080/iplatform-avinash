interface IArtist {  // TODO: to remove 
    albumImage: string,
    artistName: string
}

interface ILastFMError {
    error: number,
    message: string
}

interface ILastFMArtist {
    name: string,
    mbid: string,
    match: string,
    url: string,
    image: [
        {
            "#text": URL,
            size: string
        }
    ]
}

interface IMBZArtist {
    id: string,
    name: string
}

interface IMBZRelease {
    year: string,
    title: string,
    releaseLabel: string,
    numberOfTracks: number,
    artistCredit: string
}
