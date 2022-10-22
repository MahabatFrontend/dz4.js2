const row = document.querySelector('.row')

fetch('https://api.sampleapis.com/cartoons/cartoons2D')
.then((res) => res.json()) 
.then((res) => {
    res.forEach((item) => {
        row.innerHTML += `
            <div class="card">
                <img class="card_image" src="${item.image}">
                <p class="card_title">${item.title}</p>
                <p class="card_year">${item.year}</p>
                <p class="card_genre">${item.genre}</p>
            </div>
        `
    })
})