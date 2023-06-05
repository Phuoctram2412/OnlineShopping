let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');





let listProducts = [
    {
        id : 1,
        name: 'Iphone 14 Pro Max 256 GB',
        price: 1199,
        quantity: 0,
        image : 'https://dnc8pt3q0ulny.cloudfront.net/rp/media/14pmp1.jpg',
        nature : {
            color: ['purple'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 2,
        name: 'Ipad Pro 12.9-inch 256GB with M2 chip',
        price: 699,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_UF1000,1000_QL80_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 3,
        name: 'CeraVe Daily Skin Care (Hydrating Bundle)',
        price: 48.58,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/616qwR-bZwL.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Skincare'
        }
    },
    {
        id : 4,
        name: 'Lindyn 5-Piece Sectional with Chaise',
        price: 2859,
        quantity: 0,
        image : 'https://cdn.shopify.com/s/files/1/0535/4317/4304/products/studio_6300279e7d0f97131491660958126_ac77eebb-5483-4c26-a2a7-15e292096928.jpg?v=1661041330',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Furniture'
        }
    },
    {
        id : 5,
        name: 'Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens',
        price: 399,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_UF894,1000_QL80_.jpg',
        nature : {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Technology'
        }
    },
    {
        id : 6,
        name: 'KRIB BLING 3.5Cu.Ft Compact Refrigerator Mini Fridge with Freezer',
        price: 3580,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71f3mSwyQ7L.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Furniture'
        }
    },
    {
        id : 7,
        name: 'Apple iPhone 12 Mini (256GB, Green) [Locked]',
        price: 811,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71i+-WmxHWL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 8,
        name: 'Apple iPhone 13 Mini (128GB, Starlight) [Locked]',
        price: 810,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61D64DKlhUL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 9,
        name: 'HONBAY Sectional Modular Sleeper Sofa U Shaped Sectional Sofa',
        price: 1619,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/9109UZWfJNL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Furniture'
        }
    },
    {
        id : 10,
        name: 'Microfiber Duster, 12PCS with Extension Pole(Stainless Steel) 30 to 100 Inches, Reusable Bendable Washable Lightweight Dusters',
        price: 25.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/51oGRJVl2eL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Home supplies'
        }
    },
    {
        id : 11,
        name: '10 Drawer Dresser, Chest of Drawers',
        price: 100,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/81JMH6ndZuL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Furniture'
        }
    },
    {
        id : 12,
        name: '(2023 Upgrade)Famree Pet Grooming Vacuum for Dogs',
        price: 144.47,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71YpScPWA8L._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 13,
        name: 'Basics Gravity Pet Waterer for Dogs and Cats, Small, 1 Gallon Capacity',
        price: 19.94,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71KRo3QVT2L._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 14,
        name: 'Arm & Hammer for Pets Air Care Pet Scents Deodorizing Gel Beads',
        price: 6.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/813Q-djxlLS._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 15,
        name: 'LMVVC Pet Grooming Kit Vacuum Dog Grooming Clippers with 5 Pet Grooming Tools Pet Hair Remover',
        price: 100,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/718YW49rWSL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 16,
        name: 'Apple Watch Series 8 [GPS 41mm]',
        price: 300,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71ulah9iIwL._AC_SR155,154_QL70_.jpg',
        nature : {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 17,
        name: 'Apple airpod pro (2nd generation)',
        price: 200,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SR155,154_QL70_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 18,
        name: 'Broom and Dustpan Comb Set for Home Super Long Handle,Upright Standing Dustpan',
        price: 23.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61zELlfqTPL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Home supplies'
        }
    },
    {
        id : 19,
        name: 'Apple USB-C to Lightning Cable (2 m)',
        price: 29,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61QvSXD+InL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 20,
        name: 'Apple 15.4in MacBook Pro Laptop (Retina, Touch Bar, 2.6GHz 6-Core Intel Core i7, 16GB RAM, 512GB SSD Storage)',
        price: 629,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61qoeqwuMCL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 21,
        name: 'Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Pink',
        price: 439,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61hZrbHRMWL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 22,
        name: 'Official Creality 3D Printer Ender-5 S1 250mm/s High-Speed 3D Printers with 300 High-Temp',
        price: 579,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61k9OmPC4yL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Technology'
        }
    },
    {
        id : 23,
        name: 'Digital Camera, FHD 1080P Kids Camera 44MP Point and Shoot Digital Cameras with 32GB SD Card, 16X Zoom, Two Batteries, Lanyard, Compact Small Camera for Kids Boys Girls Teens Students Seniors-Black',
        price: 49.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/6121MRPGyJL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Technology'
        }
    },
    {
        id : 24,
        name: 'Monitech 48MP Digital Camera 4K Video Camera Reversible Display Point and Shoot Cameras for Photography 16X Digital Zoom Digital Cameras',
        price: 149.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71sAnXHjo-L._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Technology'
        }
    },
    {
        id : 25,
        name: 'Anti-Aging Face Moisturizer - Face Cream For Men with Collagen, Retinol & Hyaluronic Acid',
        price: 24.89,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71UGAOTl0ML._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Skincare'
        }
    },
    {
        id : 26,
        name: 'e.l.f.SKIN Hydrated Ever After Skincare Mini Kit, Cleanser, Makeup Remover, Moisturizer & Eye Cream',
        price: 19.97,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/81jQG6OJ6ML._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Skincare'
        }
    },
    {
        id : 27,
        name: 'The Ordinary Facial Treatment Set! Includes Vitamin C Cream, Hyaluronic Acid Serum and Niacinamide Serum',
        price: 28.80,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61E48Zrai3L._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Skincare'
        }
    },
    {
        id : 28,
        name: 'TruSkin Vitamin C-Plus Super Serum, Anti Aging Anti-Wrinkle Facial Serum with Niacinamide, Retinol',
        price: 24.79,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71hYtqQ48qL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Skincare'
        }
    },
    {
        id : 29,
        name: 'Facial Cleansing Brush Face Scrubber: COSLUS 7in1 JBK-D Electric Exfoliating Spin Cleanser Device',
        price: 14.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/51oXoXqcNRL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Skincare'
        }
    },
    {
        id : 30,
        name: 'CeraVe Retinol Serum for Post-Acne Marks and Skin Texture | Pore Refining, Resurfacing, Brightening',
        price: 14.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71tzcOuInxL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Skincare'
        }
    },
    {
        id : 31,
        name: 'Nightstand with Charging Station Bedroom End Table Set of 2 Modern Side Table',
        price: 79.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71lVYXpDXUL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Furniture'
        }
    },
    {
        id : 32,
        name: 'Leather CPR Cleaner & Conditioner + Lint-Free Microfiber Applicator -Restores, Protects & Prolongs Life',
        price: 26.90,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61Rurxk+w4L._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Home supplies'
        }
    },
    {
        id : 33,
        name: 'L Shaped Gaming Desk with Power Outlets & LED Lights, L- Shaped Desk Computer Corner Desk',
        price: 199.94,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/81sdMPzOjrL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Furniture'
        }
    },
    {
        id : 34,
        name: '18 Inch Tall and Strong Platform Metal Bed Frame/Easy Assembly Mattress Foundation/ 4000lbs Heavy Duty Frame',
        price: 159.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/91J4Qt5cgOL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Furniture'
        }
    },
    {
        id : 35,
        name: 'Amazon Basics Industrial Metal Bed Frame with Headboard and Wood Slats, 14 Inches High, Full, Black',
        price: 323.47,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71Ib0msqoAL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Furniture'
        }
    },
    {
        id : 36,
        name: 'Wag Dry Dog Food Beef & Lentil Recipe with Wild Boar (24 lb. Bag)',
        price: 59.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71EB1gOkZHL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 37,
        name: 'CESAR Wet Dog Food Classic Loaf in Sauce Poultry Variety Pack,. Easy Peel Trays with Real Chicken, Turkey or Duck, 3.5 Ounce (Pack of 24)',
        price: 27.94,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/81-RkvOq6dL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 38,
        name: 'Purina Fancy Feast Grilled Wet Cat Food Poultry and Beef Collection Wet Cat Food Variety Pack - (24) 3 oz.',
        price: 18.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/81JxOnaw0pL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 39,
        name: 'Blue Buffalo Wilderness High Protein Natural Adult Dry Dog Food Plus Wholesome Grains, Chicken 28 lb Bag',
        price: 79.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/81yFOUwWmOL._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 40,
        name: 'Amazon Brand – Wag Small Breed Dry Dog Food, Chicken and Brown Rice, 5 lb Bag',
        price: 19.67,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71TZqANIKBS._AC_UL600_FMwebp_QL65_.jpg',
        nature : {
            color: [],
            size: ['S', 'M', 'L'],
            type: 'Pet supplies'
        }
    },
    {
        id : 41,
        name: 'SAMSUNG Galaxy S23 Cell Phone, Factory Unlocked Android Smartphone, 256GB, 50MP Camera, Night Mode, Long Battery Life, Adaptive Display, US Version, 2023, Green',
        price: 859.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71Tt0M+HClL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Android'
        }
    },
    {
        id : 42,
        name: 'SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 512GB, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Lavender',
        price: 1199.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/718LuUVEOZL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Android'
        }
    },
    {
        id : 43,
        name: 'Samsung Galaxy S10e, 128GB, Prism Black - Unlocked (Renewed)',
        price: 122.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71bK3oKRCOL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Android'
        }
    },
    {
        id : 44,
        name: 'T-CORE Power Bank The Smallest and Lightest 10000mAh External Battery Ultra-Compact High-Speed Charging Technology Portable Charger for iPhone, Samsung Galaxy and More',
        price: 38.47,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/41tBvLHezgL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'Android'
        }
    },
    {
        id : 45,
        name: 'Samsung Galaxy S20 FE 5G, 128GB, Cloud Mint - Single SIM - Unlocked (Renewed)',
        price: 196,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/61cNFRPvMUL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['green'],
            size: ['S', 'M', 'L'],
            type: 'Android'
        }
    },
    {
        id : 46,
        name: 'Apple Watch Charger, 20W USB C Fast Charging for Apple Watch Ultra Series 7 8 [3.3FT] iWatch Magnetic Cable Cord with PD Fast Wall Charger Upgrade for Apple Watch Series 8 7 SE 6 5 4 3 2 1',
        price: 25.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/515oY-1I7bL._AC_UY327_QL65_.jpg',
        nature : {
            color: ['grey'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 47,
        name: 'Apple MagSafe Battery Pack - Portable Charger with Fast Charging Capability, Power Bank Compatible with iPhone',
        price: 20.99,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/418SjFMB1wL._AC_UY327_FMwebp_QL65_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 48,
        name: 'Apple 20W USB-C Power Adapter - iPhone Charger with Fast Charging Capability, Type C Wall Charger',
        price: 18.47,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/41iWogJnZQL._AC_UY327_QL65_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 49,
        name: 'Stylus Pen for iPad(2018-2022), Baseus Writing2 Active Stylus Pen with Tilt Control, Palm-Rejection and Fast Charging Compatible with Apple iPad 10th/9th/8th/7th/6th Gen, iPad Pro 11& 12.9 inches',
        price: 72.14,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/51uNUYFwP4L._AC_UY327_QL65_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 50,
        name: 'Apple Gift Card - App Store, iTunes, iPhone, iPad, AirPods, MacBook, accessories and more',
        price: 100,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/519qZwoTSjL._AC_UY327_QL65_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
    {
        id : 13,
        name: 'Wireless Charging Station, 3 in 1 Wireless Charger Stand, Fast Wireless Charging Dock for iPhone 13/12/11/Pro/X/Max/XS/XR/8/Plus, for Apple Watch7/6/5/4/3/2/SE, for Airpods 3/2/Pro(White)',
        price: 29.94,
        quantity: 0,
        image : 'https://m.media-amazon.com/images/I/71sQ4Zt3Q7L._AC_UY327_QL65_.jpg',
        nature : {
            color: ['white'],
            size: ['S', 'M', 'L'],
            type: 'Apple'
        }
    },
]



// productFilter represent all the products when the page first load
let productFilter = listProducts;

// showProduct(productFilter)
// function showProduct(productFilter){
//     // count is from the id we set in HTMl
//     count.innerText = productFilter.length;
//     list.innerHTML = '';
//     productFilter.forEach(item =>{
//         let newItem = document.createElement('div');

//         // 'item' is the container of the card that we create with hard code earlier
//         newItem.classList.add('item');

//         // create new image

//         let newImage = new Image();
//         newImage.src = item.image;

//         // then add it to the div
//         newItem.appendChild(newImage)

        

//         // create name

//         let newTitle = document.createElement('div');
//         newTitle.classList.add('title')
//         newTitle.innerText = item.name
//         newItem.appendChild(newTitle);

//         // create price

//         let newPrice = document.createElement('div');
//         newPrice.classList.add('price')
//         newPrice.innerText = '$' + item.price
//         newItem.appendChild(newPrice);

//         // create button
//         let newButton = document.createElement('div');
//         newButton.classList.add('btn');
//         newButton.innerHTML = 'Add to cart'
//         newItem.appendChild(newButton);

        


//         list.appendChild(newItem)
//     })
// }

function showProduct(productFilter){
    count.innerHTML = productFilter.length;
// must set list which is the whole container for the the product div to empty so when we filter it not
// concatinate more
    list.innerHTML = '';
    productFilter.forEach((product) =>{
       
        list.innerHTML += `
        <div class="item">
                
                <img src="${product.image}" alt="">
                <div class="title">${product.name}</div>
                <div class="price">$${product.price}</div>
                <div class="btn" onclick="addToCart(${product.id})">Add to cart</div>
        </div>
        `
    })
}
showProduct(productFilter)


filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;

    productFilter = listProducts.filter(item => {
        // category is from the html name in the select
        if (valueFilter.category.value != ''){
            // value is from the name in the option tag
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check color if the color value not empty then check
        if (valueFilter.color.value != ''){
            if(!item.nature.color.includes(valueFilter.color.value)){
                return false
            }
        }
        // check name from the html name in the select
        if (valueFilter.name.value != ''){
            if (!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price from the html name in the select
        if(valueFilter.minPrice.value != ''){
            if (item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        // check max price from the html name in the select
        if(valueFilter.maxPrice.value != ''){
            if (item.price > valueFilter.maxPrice.value){
                return false;
            }
        }

        return true
    })
    showProduct(productFilter)
});


let openShop = document.querySelector('.fa-cart-shopping');
let cart = document.querySelector('.cart');
let closeShop = document.querySelector('.close');
let checkOut = document.querySelector('.product-checkout')


openShop.addEventListener('click', ()=>{
    cart.classList.add('active')
})
closeShop.addEventListener('click', ()=>{
    cart.classList.remove('active')
})





// function renderProduct(){
//     listProducts.forEach((product) =>{
//         list.innerHTML += `
//         <div class="item">
                
//                 <img src="${product.image}" alt="">
//                 <div class="title">${product.name}</div>
//                 <div class="price">$${product.price}</div>
//                 <div id="btn">Add to cart</div>
//         </div>
//         `
//     })
// }
// renderProduct()

let cartEmpty = []

// add to cart

function addToCart(id){
    // check if product already exist
    if(cartEmpty.some((item)=> item.id === id)){
        alert('product already in cart')
    }else{

        // listProducts is from the list set above
        const item = listProducts.find((product)=> product.id === id)
        // destructuring the list
        cartEmpty.push({
            ...item, 
            numberOfUnits : 1
        })
    }
    updateCart();
}

// update cart

function updateCart(){
    renderCartItems();
    // renderSubtotal();
}

// render cart items

// function renderCartItems(){
//     listProducts.forEach((item)=>{
//         cart.innerHTML += `
//         <div class="product-checkout">
//             <div class="product-img">
//                 <img src="${item.image}" alt="">
//             </div>
//             <div class="product-detail">
//                 <span>${item.name}</span>
//                 <span>${item.price}</span>
//             </div>
//             <div class="product-total">
//                 <button>+</button>
//                 <span>0</span>
//                 <button>-</button>
//             </div>
//         </div>
//         `
//     })
// }

// renderCartItems()