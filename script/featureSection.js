const features = [
    {
        title: "free shopping",
        desc: "Order over",
        price: 200,
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16"><path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" /></svg>'
    },
    {
        title: "delivery support",
        desc: "All charges included",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16"><path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" /><path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" /><path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" /></svg>'
    },
    {
        title: "Money Returns",
        desc: "30 Days money return",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16"><path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" /><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd" /></svg>'
    },
];

// load items
window.addEventListener('DOMContentLoaded', () => {
    displayFeatures(features);
});

const featureContainer = document.querySelector('.feature-container');
let displayFeatures = (featureItems) => {
    let displayFeature = featureItems.map(feature => {
        if (feature.title === "free shopping") {

                return `  <!-- single features -->
                <div class=" bg-slate-100 shadow-lg border rounded-md px-3 py-6 flex justify-center items-center gap-5 cursor-pointer hover:scale-105 group transition-all ease-in">
                <div class="group-hover:bg-orange-400 rounded-full group-hover:scale-110 transition-all ease-in">
                    ${feature.svg}

                </div>
                <div>
                    <h4 class="font-poppins tracking-wider capitalize text-lg">${feature.title}</h4>
                    <p class="text-gray-500 text-sm">${feature.desc}<span> $${feature.price}</span></p>
                </div>
            </div>`
        }
        else {
                return ` <!-- single features -->
                <div class=" bg-slate-100 shadow-lg border rounded-md px-3 py-6 flex justify-center items-center gap-5 cursor-pointer group hover:scale-105 transition-all ease-in">
                <div class="group-hover:bg-orange-400 rounded-full group-hover:scale-110 transition-all ease-in">
                            ${feature.svg}
                </div>
                <div>
                    <h4 class="font-poppins tracking-wider capitalize text-lg">${feature.title}</h4>
                    <p class="text-gray-500 text-sm">${feature.desc}</p>
                </div>
            </div>`
        }
    }).join('\n');
    featureContainer.innerHTML = displayFeature;
}