// TODO: Make request to "sports" API endpoint and render data in HTML

let url = "http://localhost:3000/sports";

let msBeforeAjaxCall = new Date().getTime();

$.ajax(url, {
    "type": "GET",
    "timeout": 5000
})
.done(function (data, textStatus, jqXHR) {

    let cardContainer = document.querySelector('.card-container');
    data.sports.forEach(sport => {

        let card = document.createElement('a');
        card.className = 'card';
        card.href = sport.url;
        card.target = 'new';
        card.innerHTML = `
            <span card-title>${sport.id}</span>
            <img src="/images/${sport.cover_src}" alt="basketball">
            <h2 class="card-heading">${sport.heading}</h2>
            <p class="card-text">${sport.description}</p>`;

        cardContainer.appendChild(card);

    });

    let msAfterAjaxCall = new Date().getTime();
    let timeTakenInMs = msAfterAjaxCall - msBeforeAjaxCall;
    if (timeTakenInMs > 2000) {
        console.warn(`Response took long time \n Time taken: ${timeTakenInMs}ms`);

    }
})
.fail(function (jqXHR, textStatus, errorThrown) {

    let error = document.querySelector('.error');

    console.error(`Request ${url} Error: ${textStatus}`)

    error.innerHTML =`<i class="fas fa-exclamation-triangle"></i>` +  errorThrown;

})
.always(function(jqXHR, textStatus, errorThrown) {

    document.querySelector('.loading').classList.add('hidden');
})