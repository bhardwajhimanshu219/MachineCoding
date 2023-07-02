let data = []
let cardContainer = document.getElementById('card-container')
document.addEventListener("DOMContentLoaded",()=>{
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((res)=>res.json()).then((res)=>{
        data = res;
        for(let i=0;i<data.length;i++)
        {
            cardContainer.innerHTML +=`<div class="card">
            <div class="image"><img class="img" src=${data[i].image}/> </div>
            <div class="details">
            <div class="card-heading-container"><div>${data[i].name}</div><div>${data[i].current_price}</div></div>
            <div class="subheading-container"><div>${data[i].symbol}</div><div>${data[i].market_cap_change_percentage_24}</div></div>
            </div>
            </div>`
        }
    })
})