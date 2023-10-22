const slide = [
    {
        image: './assets/banner/living-room-inner-banner.jpg',
        title: "Curate Your Dream Home with our Exclusive Collection",
        desc: "Dive into a world of endless possibilities as you mix and match colors, textures, and styles to curate a space that reflects your unique personality.",
        titleColor: 'text-white',
        desColor: 'text-white',
        border: 'border-primary',
        background: 'bg-primary' 
    },
    {
        image: './assets/banner/luxury-living-Banner.jpg',
        title: "Unleash Your Home's Potential with Our Stunning Accessories",
        desc: "Indulge in the timeless charm of our artisanal ceramics, the soft embrace of luxurious throws and cushions, and the warm glow of our meticulously crafted lighting fixtures.",
        titleColor: 'text-secondary',
        desColor: 'text-secondary',
        border: 'border-secondary',
        background: 'bg-secondary'
    },
    {
        image: './assets/banner/black-and-white-interior-design-L-shaped-couch-simple-white-shades.jpg',
        title: "Create a Personal Haven with Premium Home Accessories",
        desc: "Our commitment to quality ensures that each accessory not only enhances your décor but also stands the test of time.",
        titleColor: 'text-primary',
        desColor: 'text-white',
        border: 'border-primary',
        background: 'bg-primary'
    },
    {
        image: './assets/banner/livign.jpg',
        title: "Elegant Home Accessories Await You",
        desc: "From the moment you step through the door, our handpicked selection of home accessories will captivate your senses and inspire your imagination.",
        titleColor: 'text-green-400',
        desColor: 'text-white',
        border: 'border-green-400',
        background: 'bg-green-400'
    },
    {
        image: './assets/banner/living-room-apartment-room-interior.jpg',
        title: "Your Home, Your Style: Shop Unique Accessories",
        desc: "Browse through our user-friendly website, where every product is a work of art waiting to find its place in your home.",
        titleColor: 'text-yellow-300',
        desColor: 'text-white',
        border: 'border-yellow-300',
        background: 'bg-yellow-300'
    }
];

// load items
window.addEventListener('DOMContentLoaded', () => {
    displayBannerItems(slide);
});

const bannerContainer = document.querySelector('.banner-container');
let displayBannerItems = (bannerItems) => {
    let displayBanner = bannerItems.map(slide => {
        return `  <div class="swiper-slide py-36 bg-center bg-cover bg-no-repeat" style="background-image: url(${slide.image});">
        <div class="container">
            <h1 class="text-5xl ${slide.titleColor} font-poppins tracking-wider mb-4 capitalize font-semibold w-1/2">
                ${slide.title}  
            </h1>
            <p class="w-2/5 text-lg ${slide.desColor}">
                ${slide.desc}
            </p>
            <div class="mt-12">
                <a href="#" class="border-2 ${slide.border} ${slide.background} text-white px-8 py-3 font-medium shadow-md hover:bg-transparent hover:text-primary text-lg transition ease-in hover:shadow-2xl">Shop Now</a>
            </div>
        </div>
    </div>`
    }).join('\n');
    bannerContainer.innerHTML = displayBanner;
}