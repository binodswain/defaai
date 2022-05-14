export async function fetchUserListAPI(params) {
    try {
        // const data = await fetch("https://randomuser.me/api/?results=7").then(
        //     (r) => r.json()
        // );
        return userdata.results;
    } catch (error) {
        console.log(error);
    }
}
const userdata = {
    results: [
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Hermann Josef",
                last: "Hase",
            },
            location: {
                street: {
                    number: 7432,
                    name: "Friedhofstraße",
                },
                city: "Meckenheim",
                state: "Niedersachsen",
                country: "Germany",
                postcode: 33459,
                coordinates: {
                    latitude: "-39.0701",
                    longitude: "-77.4551",
                },
                timezone: {
                    offset: "-12:00",
                    description: "Eniwetok, Kwajalein",
                },
            },
            email: "hermannjosef.hase@example.com",
            login: {
                uuid: "740b5884-e773-4429-9fc8-d0a3198b59b3",
                username: "silverlion864",
                password: "warthog",
                salt: "4BDnpiM2",
                md5: "8a808d021d6cd33b1ddb14aa5ea25693",
                sha1: "e281eb6a1ac6a2b363268f61ed79547418fd246c",
                sha256: "0e3243af86dcc5f9a8cb042d421bb9ab1da378c1d7633c6c91984680bf56a9d2",
            },
            dob: {
                date: "1944-09-16T11:59:25.407Z",
                age: 78,
            },
            registered: {
                date: "2014-03-17T09:53:32.794Z",
                age: 8,
            },
            phone: "0065-7356130",
            cell: "0173-3357377",
            id: {
                name: "",
                value: null,
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/23.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/23.jpg",
            },
            nat: "DE",
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Nicole",
                last: "Gilbert",
            },
            location: {
                street: {
                    number: 2889,
                    name: "The Drive",
                },
                city: "Sallins",
                state: "Longford",
                country: "Ireland",
                postcode: 45632,
                coordinates: {
                    latitude: "-30.7529",
                    longitude: "-163.4085",
                },
                timezone: {
                    offset: "-8:00",
                    description: "Pacific Time (US & Canada)",
                },
            },
            email: "nicole.gilbert@example.com",
            login: {
                uuid: "5659b6bc-98c5-4324-ad96-d197f687c1ca",
                username: "bigrabbit697",
                password: "season",
                salt: "YhJC9yIE",
                md5: "56a7dfa0afb9f68b86e6eda5ea4cfd3e",
                sha1: "4357e085e7e5bbe1ff8683b61a7c5ca4673db874",
                sha256: "99931121d9b5a86272025f729acc0d6378001027b9c2f0577de27e4d71ac5d42",
            },
            dob: {
                date: "1967-12-24T19:51:42.887Z",
                age: 55,
            },
            registered: {
                date: "2011-04-28T03:09:43.820Z",
                age: 11,
            },
            phone: "031-275-4012",
            cell: "081-418-3499",
            id: {
                name: "PPS",
                value: "3018708T",
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/12.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/12.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/12.jpg",
            },
            nat: "IE",
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "سینا",
                last: "سهيلي راد",
            },
            location: {
                street: {
                    number: 6581,
                    name: "آذربایجان",
                },
                city: "قائم‌شهر",
                state: "ایلام",
                country: "Iran",
                postcode: 57342,
                coordinates: {
                    latitude: "-12.3756",
                    longitude: "7.0932",
                },
                timezone: {
                    offset: "+6:00",
                    description: "Almaty, Dhaka, Colombo",
                },
            },
            email: "syn.shylyrd@example.com",
            login: {
                uuid: "244c8702-471d-457e-a601-dc0da586ca0a",
                username: "beautifulmeercat750",
                password: "bigguns",
                salt: "3fW2dq31",
                md5: "05466afea8c3e0b4d7a4a5cda1e23dbe",
                sha1: "d2389e71e69da09f118bd26227a334b4e7812aba",
                sha256: "73d13c4aff288d487df56798e195a64e9e39641e81ab013d049032b51a079901",
            },
            dob: {
                date: "1984-08-04T04:15:27.015Z",
                age: 38,
            },
            registered: {
                date: "2006-03-11T14:53:51.732Z",
                age: 16,
            },
            phone: "039-53287464",
            cell: "0988-703-6411",
            id: {
                name: "",
                value: null,
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/21.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/21.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/21.jpg",
            },
            nat: "IR",
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Esma",
                last: "Ozansoy",
            },
            location: {
                street: {
                    number: 6947,
                    name: "Tunalı Hilmi Cd",
                },
                city: "Çanakkale",
                state: "Giresun",
                country: "Turkey",
                postcode: 78321,
                coordinates: {
                    latitude: "-57.9987",
                    longitude: "9.3686",
                },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima",
                },
            },
            email: "esma.ozansoy@example.com",
            login: {
                uuid: "e1cd04ed-219b-4b33-9e86-3cb6a7eeb05a",
                username: "bigbear977",
                password: "joshua",
                salt: "SdHKpQPJ",
                md5: "f1b395e854bc7c1bf28c476d82296a22",
                sha1: "24f3c92d1488d7dd7cdb8964ce6ef2e3ad5e11bd",
                sha256: "b3db676fd7887e62b536b229f3344f5e59c8d06209712fcd05b8ce185b04feae",
            },
            dob: {
                date: "1993-08-10T08:10:06.344Z",
                age: 29,
            },
            registered: {
                date: "2005-12-19T04:46:57.789Z",
                age: 17,
            },
            phone: "(229)-344-4491",
            cell: "(357)-363-4186",
            id: {
                name: "",
                value: null,
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/75.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/75.jpg",
            },
            nat: "TR",
        },
        {
            gender: "female",
            name: {
                title: "Mademoiselle",
                first: "Alicia",
                last: "Lucas",
            },
            location: {
                street: {
                    number: 8748,
                    name: "Rue du Village",
                },
                city: "Bauma",
                state: "Basel-Landschaft",
                country: "Switzerland",
                postcode: 7028,
                coordinates: {
                    latitude: "-2.1199",
                    longitude: "-112.7151",
                },
                timezone: {
                    offset: "+10:00",
                    description: "Eastern Australia, Guam, Vladivostok",
                },
            },
            email: "alicia.lucas@example.com",
            login: {
                uuid: "2ef5a54b-a35c-4b08-93aa-9710fe3c43f4",
                username: "ticklishcat619",
                password: "pinky1",
                salt: "LjfkYbaB",
                md5: "387003f2c3a5f695c905fc6bc391b3f1",
                sha1: "70e47fd1e31d2fc73f7dfc189ebe8afe82b6e500",
                sha256: "6124753682b8889c21335ed7873dcf574e0c4b3d1d1a5efb55ed4bb628bf5ff8",
            },
            dob: {
                date: "1958-03-23T14:23:10.867Z",
                age: 64,
            },
            registered: {
                date: "2009-03-03T19:11:59.346Z",
                age: 13,
            },
            phone: "076 982 72 99",
            cell: "077 061 62 43",
            id: {
                name: "AVS",
                value: "756.1030.6042.44",
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/8.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/8.jpg",
            },
            nat: "CH",
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "عرشيا",
                last: "موسوی",
            },
            location: {
                street: {
                    number: 5748,
                    name: "میدان شهید نامجو",
                },
                city: "قم",
                state: "مازندران",
                country: "Iran",
                postcode: 50963,
                coordinates: {
                    latitude: "-6.9054",
                    longitude: "-1.9185",
                },
                timezone: {
                    offset: "+5:45",
                    description: "Kathmandu",
                },
            },
            email: "aarshy.mwswy@example.com",
            login: {
                uuid: "66e268c6-a572-4da3-a097-fdd1279212d0",
                username: "goldenbutterfly121",
                password: "altoids",
                salt: "vIUYbQ47",
                md5: "f8d9db8b8c8891fd8e765e54c035f3f9",
                sha1: "6b7cb70a16d4600a881138232e193d49c1746371",
                sha256: "71061e7da661975e826735239b56fecd6587a054b92fd6eb2731f4cadc22a60c",
            },
            dob: {
                date: "1979-08-31T09:32:34.830Z",
                age: 43,
            },
            registered: {
                date: "2012-07-25T14:19:36.519Z",
                age: 10,
            },
            phone: "079-09928173",
            cell: "0904-064-3100",
            id: {
                name: "",
                value: null,
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/79.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/men/79.jpg",
            },
            nat: "IR",
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Laura",
                last: "Bertrand",
            },
            location: {
                street: {
                    number: 3627,
                    name: "Rue Duquesne",
                },
                city: "Montreuil",
                state: "Tarn-et-Garonne",
                country: "France",
                postcode: 64964,
                coordinates: {
                    latitude: "-89.5023",
                    longitude: "-18.1542",
                },
                timezone: {
                    offset: "+5:45",
                    description: "Kathmandu",
                },
            },
            email: "laura.bertrand@example.com",
            login: {
                uuid: "bd194612-a5fd-44c3-bf70-a2b466205090",
                username: "redbear354",
                password: "richard",
                salt: "Rdliugtp",
                md5: "b6d54554cee3cd58687506e41245a182",
                sha1: "83e2ada6e6ed20c2ebf785457a54bd05da6dc2f2",
                sha256: "106ddb1c071bf919bd40e636d8ba7b3750260adeb550c0657c7e92fecaabb075",
            },
            dob: {
                date: "1985-03-29T21:50:08.306Z",
                age: 37,
            },
            registered: {
                date: "2010-01-01T19:46:55.505Z",
                age: 12,
            },
            phone: "05-41-45-37-05",
            cell: "06-19-58-28-83",
            id: {
                name: "INSEE",
                value: "2NNaN59219796 45",
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/57.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
                thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/57.jpg",
            },
            nat: "FR",
        },
    ],
    info: {
        seed: "41916dd15e223a12",
        results: 7,
        page: 1,
        version: "1.3",
    },
};
