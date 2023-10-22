const categories = [
    {
        name: "bedroom",
        img: "./assets/categories/bed-free-5-svgrepo-com.svg"
    },
    {
        name: "sofa",
        img: "./assets/categories/sofa-9-svgrepo-com.svg"
    },
    {
        name: "office",
        img: "./assets/categories/office-chair-svgrepo-com.svg"
    },
    {
        name: "outdoor",
        img: "./assets/categories/outdoor-holidays-relax-svgrepo-com.svg"
    },
    {
        name: "kitchen",
        img: "./assets/categories/kitchen-room-svgrepo-com.svg"
    },
    {
        name: "dining",
        img: "./assets/categories/dining-room-furniture-svgrepo-com.svg"
    }

];

// load items
window.addEventListener('DOMContentLoaded', () => {
    displayCategories(categories);
})

const dropdownContainer = document.querySelector('.dropdown-container');
let displayCategories = (categoryItems) => {
    let displayCategory = categoryItems.map(category => {
        return ` <a href="#shop-by-category" class="dropdown-link">
        <img src=${category.img} class="w-5 h-5 object-contain" alt=${category.name}>
        <span class="ml-6 text-gray-600 text-sm capitalize">${category.name}</span>
    </a>`
    }).join('\n');
    dropdownContainer.innerHTML = displayCategory;
} 
