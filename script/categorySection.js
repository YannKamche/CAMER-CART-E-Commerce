items = [
    {
        name: "bedroom",
        img: "./assets/Category/Bedroom.jpg"
    },
    {
        name: "sofa",
        img: "./assets/Category/Sofa.jpg"
    },
    {
        name: "office",
        img: "./assets/Category/Outdoor.jpg"
    },
    {
        name: "outdoor",
        img: "./assets/Category/Office.jpg"
    },
    {
        name: "kitchen",
        img: "./assets/Category/Kitchen.jpg"
    },
    {
        name: "dining",
        img: "./assets/Category/Dining.jpg"
    }
];

//load items
window.addEventListener('DOMContentLoaded', () => {
    displayItems(items);
});

const categoryContainer = document.querySelector('.category-container');
let displayItems = (Items) => {
    let displayItem = Items.map(item => {
        return ` <!-- Single Category -->
        <div class="relative rounded-sm overflow-hidden group shadow-sm">
        <img src= ${item.img} alt=${item.name} class="w-full h-full">
        <a href="" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition-all -translate-y-full group-hover:translate-y-0 ease-in capitalize">${item.name}</a>
    </div>`
    }).join('\n');
    categoryContainer.innerHTML = displayItem;
}