const Products = [
    {
        id: 1,
        name: 'ANIMAL JACQUARD CARDIGAN',
        details: 'KNIT CARDIGAN WITH A ROUND NECKLINE AND LONG SLEEVES. BUTTON-UP FRONT.',
        price: 1299000,
        colour: 'Multicoloured',
        sizes: ['S', 'M', 'L'],
        genre: 2,
        thumbImage: 'https://static.zara.net/photos///2021/V/0/1/p/5755/029/330/2/w/840/5755029330_2_1_1.jpg?ts=1610542671845',
        carouselImages: [
            'https://static.zara.net/photos///2021/V/0/1/p/5755/029/330/2/w/1096/5755029330_2_1_1.jpg?ts=1610542671845',
            'https://static.zara.net/photos///2021/V/0/1/p/5755/029/330/2/w/1096/5755029330_2_2_1.jpg?ts=1610542667113',
            'https://static.zara.net/photos///2021/V/0/1/p/5755/029/330/2/w/1096/5755029330_6_1_1.jpg?ts=1610698640712',
            'https://static.zara.net/photos///2021/V/0/1/p/5755/029/330/2/w/1096/5755029330_6_2_1.jpg?ts=1610698622516',
            'https://static.zara.net/photos///2021/V/0/1/p/5755/029/330/2/w/1096/5755029330_6_3_1.jpg?ts=1610698305707'
        ]
    },
    {
        id: 2,
        name: 'VELVET MINI DRESS',
        details: 'SHORT DRESS FEATURING A V-NECKLINE, SHORT PUFF SLEEVES WITH ELASTIC TRIM, VOLUMINOUS HEM AND INVISIBLE SIDE ZIP FASTENING.',
        price: 1699000,
        colour: 'Red',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        genre: 2,
        thumbImage: 'https://static.zara.net/photos///2021/V/0/1/p/2731/045/600/2/w/840/2731045600_2_1_1.jpg?ts=1610542544918',
        carouselImages: [
            'https://static.zara.net/photos///2021/V/0/1/p/2731/045/600/2/w/40/2731045600_1_1_1.jpg?ts=1610542545490',
            'https://static.zara.net/photos///2021/V/0/1/p/2731/045/600/2/w/40/2731045600_2_1_1.jpg?ts=1610542544918',
            'https://static.zara.net/photos///2021/V/0/1/p/2731/045/600/2/w/40/2731045600_6_1_1.jpg?ts=1610698516184',
            'https://static.zara.net/photos///2021/V/0/1/p/2731/045/600/2/w/40/2731045600_6_2_1.jpg?ts=1610698285616',
            'https://static.zara.net/photos///2021/V/0/1/p/2731/045/600/2/w/40/2731045600_6_3_1.jpg?ts=1610698746256'
        ]
    },
    {
        id: 3,
        name: 'CHECK MINI DRESS',
        details: 'DRESS WITH A SQUARE NECKLINE AND THIN STRAPS. FALSE CHEST WELT POCKET AND FRONT FLAP POCKETS.',
        price: 999000,
        colour: 'Brown',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        genre: 2,
        thumbImage: 'https://static.zara.net/photos///2021/V/0/1/p/3067/802/700/2/w/840/3067802700_1_1_1.jpg?ts=1610542578108',
        carouselImages: [
            'https://static.zara.net/photos///2021/V/0/1/p/3067/802/700/2/w/40/3067802700_1_1_1.jpg?ts=1610542578108',
            'https://static.zara.net/photos///2021/V/0/1/p/3067/802/700/2/w/40/3067802700_2_1_1.jpg?ts=1610542577888',
            'https://static.zara.net/photos///2021/V/0/1/p/3067/802/700/2/w/40/3067802700_6_1_1.jpg?ts=1609146639315',
            'https://static.zara.net/photos///2021/V/0/1/p/3067/802/700/2/w/40/3067802700_6_2_1.jpg?ts=1609146513607',
            'https://static.zara.net/photos///2021/V/0/1/p/3067/802/700/2/w/40/3067802700_6_3_1.jpg?ts=1609146560878'
        ]
    },
    {
        id: 4,
        name: 'POUCH POCKET PARKA WITH SLOGAN',
        details: 'LIGHTWEIGHT POUCH POCKET PARKA WITH A HIGH COLLAR AND ADJUSTABLE HOOD. LONG CUFFED SLEEVES WITH AN ADJUSTABLE HOOK-AND-LOOP STRAP. POCKETS WITH ZIPS ON THE HIPS. ADJUSTABLE ELASTIC TRIM ON THE SIDES. ZIP-UP FRONT.',
        price: 1699000,
        colour: 'Red',
        sizes: ['M', 'L', 'XL'],
        genre: 1,
        thumbImage: 'https://static.zara.net/photos///2021/V/0/2/p/3833/402/600/2/w/840/3833402600_2_1_1.jpg?ts=1610044760159',
        carouselImages: [
            'https://static.zara.net/photos///2021/V/0/2/p/3833/402/600/2/w/40/3833402600_1_1_1.jpg?ts=1610045270364',
            'https://static.zara.net/photos///2021/V/0/2/p/3833/402/600/2/w/40/3833402600_2_2_1.jpg?ts=1610044749789',
            'https://static.zara.net/photos///2021/V/0/2/p/3833/402/600/2/w/774/3833402600_2_3_1.jpg?ts=1610044749905',
            'https://static.zara.net/photos///2021/V/0/2/p/3833/402/600/2/w/774/3833402600_2_4_1.jpg?ts=1610044749971',
            'https://static.zara.net/photos///2021/V/0/2/p/3833/402/600/2/w/774/3833402600_2_5_1.jpg?ts=1610044770874'
        ]
    },
    {
        id: 5,
        name: 'MICKEY MOUSE ©DISNEY SWEATSHIRT',
        details: 'LOOSE-FITTING SWEATSHIRT WITH A ROUND NECK AND LONG SLEEVES. MICKEY MOUSE © DISNEY PRINT ON THE FRONT AND BACK. RIBBED TRIMS.',
        price: 1299000,
        colour: 'White',
        sizes: ['S', 'M', 'L', 'XL'],
        genre: 1,
        thumbImage: 'https://static.zara.net/photos///2021/V/0/2/p/0495/400/250/2/w/840/0495400250_2_4_1.jpg?ts=1608718256567',
        carouselImages: [
            'https://static.zara.net/photos///2021/V/0/2/p/0495/400/250/2/w/40/0495400250_1_1_1.jpg?ts=1608718297370',
            'https://static.zara.net/photos///2021/V/0/2/p/0495/400/250/2/w/40/0495400250_2_2_1.jpg?ts=1608718011990',
            'https://static.zara.net/photos///2021/V/0/2/p/0495/400/250/2/w/40/0495400250_2_3_1.jpg?ts=1608717996134',
            'https://static.zara.net/photos///2021/V/0/2/p/0495/400/250/2/w/40/0495400250_2_4_1.jpg?ts=1608718256567',
            'https://static.zara.net/photos///2021/V/0/2/p/0495/400/250/2/w/40/0495400250_6_1_1.jpg?ts=1609838973047'
        ]
    },
    {
        id: 6,
        name: 'CONTRAST FAUX SHEARLING GILET',
        details: 'GILET WITH A HIGH NECK. PATCH POCKETS AT THE HIP AND TECHNICAL FABRIC PIECE DETAIL WITH MATCHING POCKET AT THE CHEST. ELASTIC HEM. ZIP-UP FRONT.',
        price: 1299000,
        colour: 'Brown',
        sizes: ['S-M', 'L-XL'],
        genre: 1,
        thumbImage: 'https://static.zara.net/photos///2021/V/0/2/p/6318/403/700/2/w/840/6318403700_2_5_1.jpg?ts=1610045014803',
        carouselImages: [
            'https://static.zara.net/photos///2021/V/0/2/p/6318/403/700/2/w/40/6318403700_1_1_1.jpg?ts=1610045024609',
            'https://static.zara.net/photos///2021/V/0/2/p/6318/403/700/2/w/40/6318403700_2_2_1.jpg?ts=1610045014838',
            'https://static.zara.net/photos///2021/V/0/2/p/6318/403/700/2/w/40/6318403700_2_3_1.jpg?ts=1610045014638',
            'https://static.zara.net/photos///2021/V/0/2/p/6318/403/700/2/w/40/6318403700_2_5_1.jpg?ts=1610045014803',
            'https://static.zara.net/photos///2021/V/0/2/p/6318/403/700/2/w/40/6318403700_6_1_1.jpg?ts=1610102863120'
        ]
    },
    {
        id: 7,
        name: 'COW FACE SWEATSHIRT',
        details: 'LONG SLEEVE SWEATSHIRT WITH A HIGH NECK AND RIBBED TRIMS. COW FACE PRINT.',
        price: 499000,
        colour: 'Anthracite grey',
        sizes: ['9-12 months (80 cm)', '12-18 months (86 cm)', '18-24 months (92 cm)', '2-3 years (98 cm)', '3-4 years (104 cm)'],
        genre: 3,
        thumbImage: 'https://static.zara.net/photos///2021/V/0/3/p/3337/017/807/442/w/40/3337017807_2_10_1.jpg?ts=1611056200238',
        carouselImages: [
            'https://static.zara.net/photos///2021/V/0/3/p/3337/017/807/442/w/40/3337017807_2_10_1.jpg?ts=1611056200238',
            'https://static.zara.net/photos///2021/V/0/3/p/3337/017/807/2/w/40/3337017807_6_1_1.jpg?ts=1608197333973',
            'https://static.zara.net/photos///2021/V/0/3/p/3337/017/807/2/w/40/3337017807_6_2_1.jpg?ts=1608197291502',
            'https://static.zara.net/photos///2021/V/0/3/p/3337/017/807/2/w/40/3337017807_6_3_1.jpg?ts=1608197617242',
        ]
    },
    {
        id: 8,
        name: 'CHECK OVERSIZE BLOUSE WITH BIB COLLAR',
        details: 'OVERSIZE BLOUSE WITH A BIB COLLAR AND LONG SLEEVES. BUTTONED TEARDROP OPENING ON THE CHEST. SIDE VENTS.',
        price: 699000,
        colour: 'Red',
        sizes: ['6 years (116 cm)', '7 years (122 cm)', '8 years (128 cm)', '9 years (134 cm)', '10 years (140 cm)', '11-12 years (152 cm)', '13-14 years (164 cm)'],
        genre: 3,
        thumbImage: 'https://static.zara.net/photos///2021/V/0/3/p/1006/124/600/132/w/40/1006124600_2_10_1.jpg?ts=1611054975955',
        carouselImages: [
            'https://static.zara.net/photos///2021/V/0/3/p/1006/124/600/132/w/40/1006124600_2_10_1.jpg?ts=1611054975955',
            'https://static.zara.net/photos///2021/V/0/3/p/1006/124/600/2/w/40/1006124600_1_1_1.jpg?ts=1608197736602',
            'https://static.zara.net/photos///2021/V/0/3/p/1006/124/600/2/w/40/1006124600_2_1_1.jpg?ts=1608197691929',
            'https://static.zara.net/photos///2021/V/0/3/p/1006/124/600/2/w/40/1006124600_2_2_1.jpg?ts=1608197805089',
        ]
    },
]

export default Products;