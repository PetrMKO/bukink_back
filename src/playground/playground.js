
const hotels = [
    {
        "id": "h0",
        "address": "Россия, Москва, проспект Мира, 150",
        "image": "https://avatars.mds.yandex.net/get-altay/4824927/2a00000180b7cf56ef3af4ee71c861c09cb7/XL",
        "location": "Москва",
        "name": "Cosmos Moscow Vdnh Hotel",
        "totalTextReviewCount": 5981,
        "rating": 4.3,
        "price": 7040
    },
    {
        "id": "h1",
        "address": "Россия, Москва, Тверская улица, 26/1",
        "image": "https://avatars.mds.yandex.net/get-altay/224414/2a0000015d56a390c81e14a9dd5603d91efd/XL",
        "location": "Москва",
        "name": "Марриотт Москва Гранд Отель",
        "totalTextReviewCount": 1472,
        "rating": 4.9,
        "price": 15000
    },
    {
        "id": "h2",
        "address": "Россия, Москва, Дмитровское шоссе, 46, корп. 2",
        "image": "https://avatars.mds.yandex.net/get-altay/2056672/2a0000016d5fc7414172df4b63f869f1038e/XL",
        "location": "Москва",
        "name": "Ахоум-отель на Окружной",
        "totalTextReviewCount": 582,
        "rating": 4.5,
        "price": 4040
    },
    {
        "id": "h3",
        "address": "Россия, Москва, Павелецкая площадь, 1А, стр. 1",
        "image": "https://avatars.mds.yandex.net/get-altay/1514203/2a0000016daf6e81549bb72a57993c8f8063/XL",
        "location": "Москва",
        "name": "New City Inn",
        "totalTextReviewCount": 239,
        "rating": 4.2,
        "price": 7200
    },
    {
        "id": "h4",
        "address": "Россия, Москва, Дмитровское шоссе, 27, корп. 1",
        "image": "https://avatars.mds.yandex.net/get-altay/3767262/2a000001764df06dddc6a1b39b91ab7fca1f/XL",
        "location": "Москва",
        "name": "Парк Тауэр",
        "totalTextReviewCount": 1140,
        "rating": 4.4,
        "price": 6399
    },
    {
        "id": "h5",
        "address": "Россия, Москва, улица Новый Арбат, 32",
        "image": "https://avatars.mds.yandex.net/get-altay/1880508/2a0000016d60f1a9c9d92db0115425dd19a1/XL",
        "location": "Москва",
        "name": "Москва Марриотт Новый Арбат",
        "totalTextReviewCount": 732,
        "rating": 4.9,
        "price": 15600
    },
    {
        "id": "h6",
        "address": "Россия, Москва, Смоленская улица, 8",
        "image": "https://avatars.mds.yandex.net/get-altay/239474/2a0000015cb6545e1988d211416ff55fc65a/XL",
        "location": "Москва",
        "name": "AZIMUT Сити Отель Смоленская Москва",
        "totalTextReviewCount": 3147,
        "rating": 4.9,
        "price": 15300
    },
    {
        "id": "h7",
        "address": "Россия, Москва, Суворовская площадь, 2, стр. 3",
        "image": "https://avatars.mds.yandex.net/get-altay/6119709/2a0000017fbfe5ac33a46b4c5d7e36fd9e6d/XL",
        "location": "Москва",
        "name": "Славянка",
        "totalTextReviewCount": 1178,
        "rating": 4.4,
        "price": 8000
    },
    {
        "id": "h8",
        "address": "Россия, Москва, Ярославская улица, 10, корп. 2",
        "image": "https://avatars.mds.yandex.net/get-altay/4797538/2a0000017aef6324330bbb6aa113c14ec3d8/XL",
        "location": "Москва",
        "name": "Z hotel",
        "totalTextReviewCount": 315,
        "rating": 4.3,
        "price": 5292
    },
    {
        "id": "h9",
        "address": "Россия, Москва, Тверская улица, 9Ас5",
        "image": "https://avatars.mds.yandex.net/get-altay/2424821/2a000001762451c47037e5ee135e9f763852/XL",
        "location": "Москва",
        "name": "Гостиница А. Kosterev",
        "totalTextReviewCount": 344,
        "rating": 4.9,
        "price": 4900
    },
    {
        "id": "h10",
        "address": "Россия, Москва, Дубининская улица, 33В",
        "image": "https://avatars.mds.yandex.net/get-altay/5649895/2a00000181439897b6d90ae2a0ecc5c70872/XL",
        "location": "Москва",
        "name": "Cosmos Smart Dubininskaya",
        "totalTextReviewCount": 1306,
        "rating": 4.9,
        "price": 9600
    },
    {
        "id": "h11",
        "address": "Россия, Москва, Моховая улица, 15/1с1",
        "image": "https://avatars.mds.yandex.net/get-altay/200322/2a0000015b2ebffdd7ddd58e1ddb1bbc6ecc/XL",
        "location": "Москва",
        "name": "Националь",
        "totalTextReviewCount": 714,
        "rating": 4.9,
        "price": 31200
    },
    {
        "id": "h12",
        "address": "Россия, Москва, Краснопресненская набережная, 12",
        "image": "https://avatars.mds.yandex.net/get-altay/934739/2a0000015f101462e2d9af341555cfbffb60/XL",
        "location": "Москва",
        "name": "Crowne Plaza Moscow - World Trade Centre",
        "totalTextReviewCount": 1696,
        "rating": 5,
        "price": 20000
    },
    {
        "id": "h13",
        "address": "Россия, Москва, Центральный административный округ, Красносельский район, Каланчёвская улица, 21/40",
        "image": "https://avatars.mds.yandex.net/get-altay/4537001/2a00000177f84d1dabdd2ff43cccc8517828/XL",
        "location": "Москва",
        "name": "Хилтон Москва Ленинградская",
        "totalTextReviewCount": 1353,
        "rating": 4.9,
        "price": 16800
    },
    {
        "id": "h14",
        "address": "Россия, Москва, Нахимовский проспект, 2",
        "image": "https://avatars.mds.yandex.net/get-altay/1551063/2a000001687756b6c2bc000722f3af2bc2cc/XL",
        "location": "Москва",
        "name": "Ахаус-отель",
        "totalTextReviewCount": 841,
        "rating": 4.4,
        "price": 3924
    },
    {
        "id": "h15",
        "address": "Россия, Москва, Дубининская улица, 57, корп. 3",
        "image": "https://avatars.mds.yandex.net/get-altay/2384989/2a00000171fa10a832d001a89d8d2aab00d3/XL",
        "location": "Москва",
        "name": "Кеды",
        "totalTextReviewCount": 207,
        "rating": 4.6,
        "price": 3100
    },
    {
        "id": "h16",
        "address": "Россия, Москва, улица Сущёвский Вал, 74",
        "image": "https://avatars.mds.yandex.net/get-altay/5098810/2a00000181f7881d4e757c0e38e2cfc4859d/XL",
        "location": "Москва",
        "name": "Холидей ИНН Москва Сущевский",
        "totalTextReviewCount": 1283,
        "rating": 4.7,
        "price": 7600
    },
    {
        "id": "h17",
        "address": "Россия, Москва, Вознесенский переулок, 7",
        "image": "https://avatars.mds.yandex.net/get-altay/374295/2a0000015b0ae0f856d3cd7855f43ea3c75b/XL",
        "location": "Москва",
        "name": "Кортъярд Марриотт Москва Сити центр",
        "totalTextReviewCount": 570,
        "rating": 4.9,
        "price": 13000
    },
    {
        "id": "h18",
        "address": "Россия, Москва, Олимпийский проспект, 18/1",
        "image": "https://avatars.mds.yandex.net/get-altay/2006773/2a0000016dc52f9ccff00c4d1388700fe704/XL",
        "location": "Москва",
        "name": "AZIMUT Сити Отель Олимпик Москва",
        "totalTextReviewCount": 2988,
        "rating": 4.9,
        "price": 13600
    },
    {
        "id": "h19",
        "address": "Россия, Москва, Кожевническая улица, 8, стр. 3",
        "image": "https://avatars.mds.yandex.net/get-altay/4335885/2a000001825eddc1a5dbebbd68eebc4756c7/XL",
        "location": "Москва",
        "name": "Космос Павелецкая",
        "totalTextReviewCount": 582,
        "rating": 4.7,
        "price": 12000
    },
    {
        "id": "h20",
        "address": "Россия, Москва, 1-я Тверская-Ямская улица, 34",
        "image": "https://avatars.mds.yandex.net/get-altay/223006/2a0000015b2ebdd6fff7e1634092fecdfb3c/XL",
        "location": "Москва",
        "name": "Москва Марриотт Тверская",
        "totalTextReviewCount": 653,
        "rating": 4.8,
        "price": 13440
    },
    {
        "id": "h21",
        "address": "Россия, Москва, Скатертный переулок, 13",
        "image": "https://avatars.mds.yandex.net/get-altay/1583613/2a0000016c94441ce32134f9c135eeebe590/XL",
        "location": "Москва",
        "name": "Arbat House",
        "totalTextReviewCount": 1071,
        "rating": 4.4,
        "price": 12960
    },
    {
        "id": "h22",
        "address": "Россия, Москва, Новослободская улица, 23",
        "image": "https://avatars.mds.yandex.net/get-altay/1868686/2a0000016f76501e7f3426f17d400ccd2df2/XL",
        "location": "Москва",
        "name": "Novotel Москва центр",
        "totalTextReviewCount": 1077,
        "rating": 4.7,
        "price": 12400
    },
    {
        "id": "h23",
        "address": "Россия, Москва, Ленинградский проспект, 37, корп. 8",
        "image": "https://avatars.mds.yandex.net/get-altay/5596516/2a0000017fe70e4bc4368d3f7c75a43c6bbd/XL",
        "location": "Москва",
        "name": "Ibis Москва Динамо",
        "totalTextReviewCount": 1044,
        "rating": 4.7,
        "price": 9300
    },
    {
        "id": "h24",
        "address": "Россия, Москва, Комсомольская площадь, 2",
        "image": "https://avatars.mds.yandex.net/get-altay/372953/2a0000015ed8bbf1c9c89f145666bd2cc6f8/XL",
        "location": "Москва",
        "name": "ГородОтель",
        "totalTextReviewCount": 141,
        "rating": 4,
        "price": 7200
    },
    {
        "id": "h25",
        "address": "Россия, Москва, Октябрьский переулок, 12",
        "image": "https://avatars.mds.yandex.net/get-altay/2402012/2a00000174c5c2c55feffacf84d7244d116c/XL",
        "location": "Москва",
        "name": "Металлург",
        "totalTextReviewCount": 522,
        "rating": 3.8,
        "price": 5000
    },
    {
        "id": "h26",
        "address": "Россия, Москва, улица 10-летия Октября, 11",
        "image": "https://avatars.mds.yandex.net/get-altay/1024093/2a0000016157209e09ed6a9a25711bb352d7/XL",
        "location": "Москва",
        "name": "Арена",
        "totalTextReviewCount": 267,
        "rating": 4,
        "price": 4400
    },
    {
        "id": "h27",
        "address": "Россия, Москва, проспект Мира, 184, корп. 1",
        "image": "https://avatars.mds.yandex.net/get-altay/1881734/2a0000016dc984fd36b89c8b72be90486cf9/XL",
        "location": "Москва",
        "name": "Shelterz ВДНХ",
        "totalTextReviewCount": 180,
        "rating": 4.2,
        "price": 3591
    },
    {
        "id": "h28",
        "address": "Россия, Москва, Ленинский проспект, 30",
        "image": "https://avatars.mds.yandex.net/get-altay/3905724/2a0000017551c7fbd2741c6ab86873ff3a97/XL",
        "location": "Москва",
        "name": "Shelterz Парк Горького",
        "totalTextReviewCount": 136,
        "rating": 4.4,
        "price": 3325
    },
    {
        "id": "h29",
        "address": "Россия, Москва, Смоленская улица, 5",
        "image": "https://avatars.mds.yandex.net/get-altay/2356223/2a000001741fbb06c5e992b46fe6cb7d1238/XL",
        "location": "Москва",
        "name": "Золотое кольцо",
        "totalTextReviewCount": 909,
        "rating": 4.8,
        "price": 13600
    },
    {
        "id": "h30",
        "address": "Россия, Москва, Садовническая набережная, 17",
        "image": "https://avatars.mds.yandex.net/get-altay/2701558/2a00000170a53c8a0856d240c11e00cccf24/XL",
        "location": "Москва",
        "name": "Гестен",
        "totalTextReviewCount": 331,
        "rating": 4.7,
        "price": 7840
    },
    {
        "id": "h31",
        "address": "Россия, Москва, Ленинградский проспект, 37, корп. 5",
        "image": "https://avatars.mds.yandex.net/get-altay/6302373/2a0000017f9264a02e22acdf65df3f056ec5/XL",
        "location": "Москва",
        "name": "Аэрополис",
        "totalTextReviewCount": 508,
        "rating": 4.3,
        "price": 8560
    },
    {
        "id": "h32",
        "address": "Россия, Москва, Ленинградский проспект, 36, стр. 33",
        "image": "https://avatars.mds.yandex.net/get-altay/1352335/2a0000016412ad10a184319791e2b3449408/XL",
        "location": "Москва",
        "name": "Хаятт Ридженси Москва Петровский Парк",
        "totalTextReviewCount": 1314,
        "rating": 5,
        "price": 28800
    },
    {
        "id": "h33",
        "address": "Россия, Москва, Лесная улица, 15",
        "image": "https://avatars.mds.yandex.net/get-altay/5232541/2a00000181f7806f7917bafa8df7b2a7ed1d/XL",
        "location": "Москва",
        "name": "Холидей ИНН Москва Лесная",
        "totalTextReviewCount": 1114,
        "rating": 4.8,
        "price": 15000
    },
    {
        "id": "h34",
        "address": "Россия, Москва, Пресненская набережная, 8, стр. 1",
        "image": "https://avatars.mds.yandex.net/get-altay/5475658/2a0000018220ba663769455167df1d68020e/XL",
        "location": "Москва",
        "name": "Say Wow Capsule Hotel",
        "totalTextReviewCount": 145,
        "rating": 4.4,
        "price": 14000
    },
    {
        "id": "h35",
        "address": "Россия, Москва, улица Бахрушина, 11",
        "image": "https://avatars.mds.yandex.net/get-altay/1880508/2a0000016e6a423a7e5039ab6b9842af2a14/XL",
        "location": "Москва",
        "name": "Mercure Москва Павелецкая",
        "totalTextReviewCount": 607,
        "rating": 4.9,
        "price": 12800
    },
    {
        "id": "h36",
        "address": "Россия, Москва, Большая Юшуньская улица, 1А, корп. 2",
        "image": "https://avatars.mds.yandex.net/get-altay/1899063/2a0000016bb2245b5f3e1b51453f62325c4f/XL",
        "location": "Москва",
        "name": "Севастополь Модерн",
        "totalTextReviewCount": 1240,
        "rating": 4.8,
        "price": 10600
    },
    {
        "id": "h37",
        "address": "Россия, Москва, Сельскохозяйственная улица, 17, корп. 5",
        "image": "https://avatars.mds.yandex.net/get-altay/374295/2a0000015b1fb5d97f1b2480ff6cdd815b14/XL",
        "location": "Москва",
        "name": "Турист",
        "totalTextReviewCount": 966,
        "rating": 4.1,
        "price": 5400
    },
    {
        "id": "h38",
        "address": "Россия, Москва, Ленинградский проспект, 37, корп. 9",
        "image": "https://avatars.mds.yandex.net/get-altay/200322/2a0000015b0b6b9ded4c09b6bc48dcee65c1/XL",
        "location": "Москва",
        "name": "Аэростар",
        "totalTextReviewCount": 1413,
        "rating": 4.6,
        "price": 7840
    },
    {
        "id": "h39",
        "address": "Россия, Москва, Столешников переулок, 7с3",
        "image": "https://avatars.mds.yandex.net/get-altay/3966989/2a0000017684493ca4dde3588763f68db83c/XL",
        "location": "Москва",
        "name": "Хостелы Рус Театральная",
        "totalTextReviewCount": 111,
        "rating": 4.9,
        "price": 3600
    },
    {
        "id": "h40",
        "address": "Россия, Москва, улица Щепкина, 32с1",
        "image": "https://avatars.mds.yandex.net/get-altay/223006/2a0000015b1fc35ec68a88132967bcb3aa95/XL",
        "location": "Москва",
        "name": "Sunflower Авеню Отель Москва",
        "totalTextReviewCount": 631,
        "rating": 4.9,
        "price": 7310
    },
    {
        "id": "h41",
        "address": "Россия, Москва, Потаповский переулок, 8/12с2",
        "image": "https://avatars.mds.yandex.net/get-altay/1580511/2a0000016d449604a2e3a04b8fcb4cafeb04/XL",
        "location": "Москва",
        "name": "Strawberry Duck Moscow",
        "totalTextReviewCount": 285,
        "rating": 4.9,
        "price": 3060
    },
    {
        "id": "h42",
        "address": "Россия, Москва, улица Щипок, 22, стр. 1",
        "image": "https://avatars.mds.yandex.net/get-altay/1987173/2a000001750dfca1a26dfa4e951b0502a660/XL",
        "location": "Москва",
        "name": "Ibis Москва Павелецкая",
        "totalTextReviewCount": 630,
        "rating": 4.4,
        "price": 6205
    },
    {
        "id": "h43",
        "address": "Россия, Москва, площадь Киевского Вокзала, 1",
        "image": "https://avatars.mds.yandex.net/get-altay/374295/2a0000015b333af5475f030434f826c19a1d/XL",
        "location": "Москва",
        "name": "ГородОтель",
        "totalTextReviewCount": 112,
        "rating": 4.1,
        "price": 5950
    },
    {
        "id": "h44",
        "address": "Россия, Москва, Озерковская набережная, 26",
        "image": "https://avatars.mds.yandex.net/get-altay/216588/2a0000015b2ebdbaa1f5afb78a6d3ca48672/XL",
        "location": "Москва",
        "name": "Аквамарин",
        "totalTextReviewCount": 523,
        "rating": 4.9,
        "price": 11832
    },
    {
        "id": "h45",
        "address": "Россия, Москва, Большая Сухаревская площадь, 16/18с2",
        "image": "https://avatars.mds.yandex.net/get-altay/374295/2a0000015b0b6b8d271a7d65260e4d8922f1/XL",
        "location": "Москва",
        "name": "Гостевой дом на Сухаревке",
        "totalTextReviewCount": 26,
        "rating": 4.3,
        "price": 3000
    },
    {
        "id": "h46",
        "address": "Россия, Москва, Варшавское шоссе, 16, корп. 1",
        "image": "https://avatars.mds.yandex.net/get-altay/3932123/2a0000017649bef8d08c99c1f802c9bddeb4/XL",
        "location": "Москва",
        "name": "Лайфхакер",
        "totalTextReviewCount": 111,
        "rating": 5,
        "price": 2900
    },
    {
        "id": "h47",
        "address": "Россия, Москва, Садовническая улица, 22, стр. 2",
        "image": "https://avatars.mds.yandex.net/get-altay/5649895/2a0000017fb6f4a0f6d53f288c45c36a0935/XL",
        "location": "Москва",
        "name": "Макаров",
        "totalTextReviewCount": 194,
        "rating": 4.1,
        "price": 4000
    },
    {
        "id": "h48",
        "address": "Россия, Москва, 1-я Тверская-Ямская улица, 19",
        "image": "https://avatars.mds.yandex.net/get-altay/223006/2a0000015b1daffe8e91c5b2cbe1d07a357c/XL",
        "location": "Москва",
        "name": "Sheraton Palace Hotel Moscow",
        "totalTextReviewCount": 442,
        "rating": 4.8,
        "price": 15300
    },
    {
        "id": "h49",
        "address": "Россия, Москва, Шлюзовая набережная, 6с2",
        "image": "https://avatars.mds.yandex.net/get-altay/2960979/2a000001744f46fbab3874f9076524c24345/XL",
        "location": "Москва",
        "name": "Бизнес-отель Россо Рива",
        "totalTextReviewCount": 523,
        "rating": 4.7,
        "price": 8500
    }
]

hotels.sort((a, b) => a.rating - b.rating)
console.log(hotels);