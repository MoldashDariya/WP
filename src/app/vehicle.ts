export interface Vehicle {
    id: number;
    model: string;
    price: number;
    description: string;
    imageUrl: string;
    ratingUrl: string;
}

export interface ShoppingCartItem {
    vehicle: Vehicle;
    quantity: number;
}

export const vehicles: Vehicle[] = [
    {
        id: 1,
        model: '2024 Tesla Model S',
        price: 79990,
        description: 'The 2024 Tesla Model S is a luxury all-electric sedan that offers exceptional performance, range, and cutting-edge technology. It is renowned for its quick acceleration and high-end interior.',
        imageUrl: 'https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg',
        ratingUrl: '',
    },
    {
        id: 2,
        model: '2024 Ford Mustang Mach-E',
        price: 43995,
        description: 'The 2024 Ford Mustang Mach-E combines the excitement of the Mustang with the efficiency of electric power. This all-electric SUV has ample space for passengers and cargo, making it a great choice for families.',
        imageUrl: 'https://di-uploads-pod41.dealerinspire.com/depaulaford/uploads/2023/12/2024-Ford-Mustang-Mach-E-GT-Model-Left.jpg',
        ratingUrl: '',
    },
    {
        id: 3,
        model: '2024 Chevrolet Bolt EV',
        price: 25995,
        description: 'The 2024 Chevrolet Bolt EV is an affordable all-electric vehicle that does not compromise on performance. It is designed for efficiency and ease of driving in urban environments.',
        imageUrl: 'https://inv.assets.ansira.net/RTT/Chevrolet/2023/5838243/default/ext_G7X_deg02.jpg',
        ratingUrl: '',
    },
    {
        id: 4,
        model: '2024 Honda Civic',
        price: 21500,
        description: 'The 2024 Honda Civic continues to set the standard for compact cars with its impressive fuel efficiency, spacious interior, and top-rated safety features.',
        imageUrl: 'https://images.hgmsites.net/med/2024-honda-civic-sport-manual-angular-front-exterior-view_100900938_m.webp',
        ratingUrl: '',
    },
    {
        id: 5,
        model: '2024 BMW 3 Series',
        price: 41000,
        description: 'The 2024 BMW 3 Series offers a balance of performance and luxury. Known for its dynamic driving experience, this sedan is perfect for those who love a sporty ride.',
        imageUrl: 'https://mystrongad.com/MWB_MotorwerksBMW/Digital/3%20Series/2024/2024-BMW-3-Series-Gray.webp',
        ratingUrl: '',
    }
];

export const suvs: Vehicle[] = [
    {
        id: 6,
        model: '2024 Hyundai Tucson',
        price: 24950,
        description: 'The 2024 Hyundai Tucson offers an appealing mix of style, features, and affordability. It is equipped with advanced safety features, making it a popular choice among compact SUVs.',
        imageUrl: 'https://vehicle-images.dealerinspire.com/stock-images/chrome/b848f7d63a28d869cdefb80cc73d0a68.png',
        ratingUrl: '',
    },
    {
        id: 7,
        model: '2024 Jeep Wrangler',
        price: 28995,
        description: 'The 2024 Jeep Wrangler remains the ultimate off-road SUV with its rugged capabilities and iconic design. It\'s built for those who demand adventure in their daily drive.',
        imageUrl: 'https://alcf.s3.us-west-1.amazonaws.com/_custom/2024/jeep/wrangler/2024%20jeep%20wrangler%20%284%29.png',
        ratingUrl: '',
    },
    {
        id: 8,
        model: '2024 Volvo XC90',
        price: 49950,
        description: 'The 2024 Volvo XC90 is a luxury SUV that offers advanced safety features, a spacious interior, and efficient powertrain options. It\'s designed for comfort and protection.',
        imageUrl: 'https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2024VOS070023_01_1280_740.png',
        ratingUrl: '',
    }
];

export const sedans: Vehicle[] = [
    {
        id: 9,
        model: '2024 Mercedes-Benz C-Class',
        price: 41800,
        description: 'The 2024 Mercedes-Benz C-Class brings a blend of luxury and performance. It features advanced technology and an elegant interior, making it a standout in the luxury sedan market.',
        imageUrl: 'https://vehicle-images.dealerinspire.com/stock-images/chrome/35bdf30bf00466493b9fc708daccd144.png',
        ratingUrl: '',
    },
    {
        id: 10,
        model: '2024 Audi A4',
        price: 39900,
        description: 'The 2024 Audi A4 is known for its refined styling, powerful engine options, and intuitive technology. It provides a balanced and luxurious driving experience.',
        imageUrl: 'https://images.carprices.com/pricebooks_data/usa/colorized/2024/Audi/View2/A4/45_TFSI_quattro/8WCCAY_Z9.png',
        ratingUrl: '',
    },
    {
        id: 11,
        model: '2024 Lexus ES',
        price: 40500,
        description: 'The 2024 Lexus ES offers a quiet and comfortable ride with plenty of luxury features. It\'s a reliable choice for those seeking sophistication and comfort in a sedan.',
        imageUrl: 'https://vehicle-images.dealerinspire.com/d6c3-110010489/58AEA1C11RU046203/f13c2eff273f57da8e51b929cdfca312.png',
        ratingUrl: '',
    }
];

export const hatchbacks: Vehicle[] = [
    {
        id: 12,
        model: '2024 Volkswagen Golf',
        price: 23750,
        description: 'The 2024 Volkswagen Golf offers a compact design with robust performance and a well-crafted interior. It\'s a top choice for those who desire a sporty yet practical vehicle.',
        imageUrl: 'https://vehicle-images.dealerinspire.com/stock-images/chrome/2284dc0c869a3c0dbf05c425129be100.png',
        ratingUrl: '',
    },
    {
        id: 13,
        model: '2024 Ford Focus',
        price: 19995,
        description: 'The 2024 Ford Focus is known for its agile handling, stylish design, and advanced technology features. It\'s an economical choice for city driving.',
        imageUrl: 'https://images.netdirector.co.uk/gforces-auto/image/upload/w_330,h_220,q_auto,c_fill,f_auto,fl_lossy/auto-client/5ca207b886faed926460cbd058fb5274/focus_2022.50_st_line_vignale_5_door_frozen_white_02.png',
        ratingUrl: '',
    },
    {
        id: 14,
        model: '2024 Mazda 3',
        price: 21500,
        description: 'The 2024 Mazda 3 stands out with its sleek styling, engaging driving dynamics, and upscale interior. It combines affordability with a premium feel.',
        imageUrl: 'https://www.mazdausa.com/siteassets/vehicles/2024/mazda3-sedan/build-and-price/trims/34-jellies/turbo-premium-plus/2024-mazda-3-sedan-2.5-turbo-premium-plus-package',
        ratingUrl: '',
    }
];
