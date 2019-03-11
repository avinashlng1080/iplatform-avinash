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

/**
 *             {
                "name": "Quinoline Yellow",
                "mbid": "e10905a5-7d19-424f-ba11-79f0d6cf31b6",
                "match": "0.915843",
                "url": "https://www.last.fm/music/Quinoline+Yellow",
                "image": [
                    {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/abbf24ec17b14ceaa58f832dd0eb8ba4.png",
                        "size": "small"
                    },
                    {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/abbf24ec17b14ceaa58f832dd0eb8ba4.png",
                        "size": "medium"
                    },
                    {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/abbf24ec17b14ceaa58f832dd0eb8ba4.png",
                        "size": "large"
                    },
                    {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/abbf24ec17b14ceaa58f832dd0eb8ba4.png",
                        "size": "extralarge"
                    },
                    {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/abbf24ec17b14ceaa58f832dd0eb8ba4.png",
                        "size": "mega"
                    },
                    {
                        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/abbf24ec17b14ceaa58f832dd0eb8ba4.png",
                        "size": ""
                    }
                ],
                "streamable": "0"
 */