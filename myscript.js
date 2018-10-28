function getDeck() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
            type: 'GET',
            success: response => {
            resolve(response);
             },
            error: error => {
            reject(error);
            }
   
        });
   
    });
   
   }
   
function getCards(deckId, cardAmount) {
   return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardAmount}`,
            type: 'GET',
            success: response => {
            resolve(response);
            },
            error: error => {
            reject(error);
            }
        });
   
    });
   
   }
   
let deckPromise = getDeck();

deckPromise.then(data => {
    getCards(data.deck_id, 4).then(cardData => {
        document.getElementById('card1').src = cardData.cards[0].image;
        document.getElementById('card2').src = cardData.cards[1].image;
        document.getElementById('card3').src = cardData.cards[2].image;
        document.getElementById('card4').src = cardData.cards[3].image;
    });

});
   
function hit1() {
    deckPromise.then((data) => {
        getCards(data.deck_id, 1).then((cardData) => {
        $('#cards1').append(`<img src=${cardData.cards[0].image}>`);
        })
    })
   
 }

 function hit2() {
    deckPromise.then((data) => {
        getCards(data.deck_id, 1).then((cardData) => {
        $('#cards2').append(`<img src=${cardData.cards[0].image}>`);
        })
    })
   
 }
