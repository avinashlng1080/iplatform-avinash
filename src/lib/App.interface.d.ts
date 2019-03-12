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

/**
 *          "id": "bfcc6d75-a6a5-4bc6-8282-47aec8531818",
            "type": "Person",
            "type-id": "b6e035f4-3ce9-331c-97df-83397230b0df",
            "score": 100,
            "name": "Cher",
            "sort-name": "Cher",
            "gender": "female",
            "country": "US",
            "area": {
                "id": "489ce91b-6658-3307-9877-795b68554c98",
                "type": "Country",
                "type-id": "06dd0ae4-8c74-30bb-b43d-95dcedf961de",
                "name": "United States",
                "sort-name": "United States",
                "life-span": {
                    "ended": null
                }
            },
            "begin-area": {
                "id": "df974e09-8dea-479b-b814-133bbf39ef44",
                "type": "City",
                "type-id": "6fd8f29a-3d0a-32fc-980d-ea697b69da78",
                "name": "El Centro",
                "sort-name": "El Centro",
                "life-span": {
                    "ended": null
                }
            },
            "life-span": {
                "begin": "1946-05-20",
                "ended": null
            },
            "aliases": [
                {
                    "sort-name": "Sarkisian, Cherilyn",
                    "type-id": "d4dcd0c0-b341-3612-a332-c0ce797b25cf",
                    "name": "Cherilyn Sarkisian",
                    "locale": null,
                    "type": "Legal name",
                    "primary": null,
                    "begin-date": null,
                    "end-date": null
                },
            ],
            "tags": [
                {
                    "count": 2,
                    "name": "rock"
                },
            ]
 */