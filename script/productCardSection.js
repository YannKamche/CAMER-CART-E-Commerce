const arrivals = [
    {
        title: "armchair",
        img: "./assets/product/chair.jpg",
        newPrice: 200,
        oldPrice: 145,
        icons: {
            search: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> </svg>',
            love: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>',
            star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>'
        },
        rating: 5,
        quantity: 150
    },
    {
        title: "sectional sofa",
        img:"./assets/product/couch.jpg",
        newPrice: 145,
        oldPrice: 145,
        icons: {
            search: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> </svg>',
            love: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>',
            star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>'
        },
        rating: 4,
        quantity: 150
    },
    {
        title: "armchair",
        img: "./assets/product/bedroom.jpg",
        newPrice: 145,
        oldPrice: 145,
        icons: {
            search: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> </svg>',
            love: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>',
            star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>'
        },
        rating: 3,
        quantity: 150
    },
    {
        title: "armchair",
        img: "./assets/product/walk-in-closet.jpg",
        newPrice: 145,
        oldPrice: 145,
        icons: {
            search: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> </svg>',
            love: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>',
            star: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>'
        },
        rating: 2,
        quantity: 150
    },
       
];

//load items
window.addEventListener('DOMContentLoaded', () => {
    displayProducts(arrivals);
});

const productContainer = document.querySelector('.product-container');
let displayProducts = (arrivals) => {
    let displayProduct = arrivals.map(arrival => {
        let starRating = [];
        for(let i = 0; i < arrival.rating; i++) {
            starRating.push(`${arrival.icons.star}`);
        }
        let rating = starRating.join('\n');
        return ` <!-- Single Product -->
        <div class="bg-white shadow-xl rounded overflow-hidden group">
            
            <!-- Product image -->
            <div class="relative">
                <img src=${arrival.img} alt="" class="w-full h-full">

                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 scale-0 group-hover:scale-100 transition-transform ease-in">
                    <a href="" class="text-white rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                       ${arrival.icons.search}          
                    </a>

                     <a href="" class="text-white rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                        ${arrival.icons.love}                            
                    </a>
                </div>
            </div>

            <!-- Product content -->
            <div class="pt-4 pb-3 px-4 bg-slate-100">
                <a href="#">
                    <h4 class="uppercase font-roboto text-lg tracking-wider mb-2 text-gray-800 hover:text-primary transition">${arrival.title}</h4>
                </a>

                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-green-600 font-semibold font-poppins">$${arrival.newPrice}.00</p>
                    <p class="text-base text-gray-400 font-semibold font-roboto line-through">$${arrival.oldPrice}.00</p>
                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-yellow-500">
                        ${rating}
                                
                    </div>
                    <div class="text-lg text-gray-500 ml-3">${arrival.quantity}</div>
                </div>
            </div>

            <a href="#" class="block w-full py-2 text-center text-white font-roboto bg-primary border border-primary rounded-b-sm hover:bg-transparent hover:text-primary transition ease-in">Add to cart</a>

        </div>`
    }).join('');
    productContainer.innerHTML = displayProduct;
}