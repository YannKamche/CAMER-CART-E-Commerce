//logo array
const logo = [
    {
        name: "Wish List",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"</svg>' 
    },
    {
        name: "Cart",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"/></svg>'
    },
    {
        name: "Account",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>'
    }
];

// load items
window.addEventListener('DOMContentLoaded', () => {
    displayLogoItems(logo);
})

const logoContainer = document.querySelector('.logo-container');
let displayLogoItems = (logoItems) => {
    let displayLogo = logoItems.map(logo => {
        if (logo.name === "account")
        {
            return `<a href="#" class="text-center text-gray-700 hover:text-primary transition duration-200 ease-in relative">
            <div>${logo.svg}</div>
           <div class="text-sm leading-3">${logo.name}</div>
       </a>`
        } else {
            return `<a href="#" class="text-center text-gray-700 hover:text-primary transition duration-200 ease-in relative">
                        <div class="after:absolute after:content-['3'] after:grid after:place-items-center after:-top-1 after:left-4 after:text-white after:bg-primary after:rounded-full after:h-5 after:w-5 after:text-sm">${logo.svg}</div>
                        <div class="text-sm leading-3">${logo.name}</div>
                     </a>`
        }
    }).join('\n');
    logoContainer.innerHTML = displayLogo
}
