
// // Note to TA: There are a few errors I didn't know how to fix. I need more help to understand how to finish this 2 requierments

// /* Biography Comment */

// let commentList = [
//     {
//         name: "Micheal Lyons",
//         comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
//     },

//     {
//         name: "Gary Wong",
//         comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
//     },

//     {
//         name: "Theodore Duncan",
//         comment: "How can someone be so good. You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
//     }
// ]

// const form = document.querySelector('.form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     let userInput = event.target.yourname.value;
//     let newComment = {
//         name: userInput,
//         comment: "Lorem Ipsum"
//     }

//     commentList.push(newComment);
//     form.reset();


//   });


/* Shows Table Tickets */
let showList = [
    {
        dates: "Mon Dec 17 2018",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        button: '.button'
    },

    {
        dates: "Tue Jul 18 2019",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: '.button'
    },

]



let ticketTable = document.querySelector('.shows__table');
console.log(ticketTable)

/* First Row - Labels */
let rowLabel = document.createElement('div');
rowLabel.classList.add('show__row--label');
rowLabel.classList.add('show__row');

let itemLabel = document.createElement('p');
itemLabel.classList.add('shows__label');
itemLabel.innerText = "Dates";

let itemLabelVenue = document.createElement('p');
itemLabelVenue.classList.add('shows__label');
itemLabelVenue.innerText = "Venue";

let itemLabelLocation = document.createElement('p');
itemLabelLocation.classList.add('shows__label');
itemLabelLocation.innerText = "Location";

let itemLabelButton = document.createElement('p');
itemLabelButton.classList.add('shows__label');
itemLabelButton.classList.add('shows__label--hidden');
itemLabelButton.innerText = "Button";


ticketTable.appendChild(rowLabel);
rowLabel.appendChild(itemLabel)
rowLabel.appendChild(itemLabelVenue)
rowLabel.appendChild(itemLabelLocation)
rowLabel.appendChild(itemLabelButton)


/* Second Row */
let Row = document.createElement('div');
Row.classList.add('show__row');

let itemLabelRow = document.createElement('p');
itemLabelRow.classList.add('shows__label');
itemLabelRow.classList.add('shows__label--mobile');
itemLabelRow.innerText = "Dates";

let showInfo = document.createElement('p');
showInfo.classList.add('show__info')
showInfo.classList.add('show__info--date')
showInfo.innerText = "Mon Dec 17 2018";

let itemLabelRowVenue = document.createElement('p');
itemLabelRowVenue.classList.add('shows__label');
itemLabelRowVenue.classList.add('shows__label--mobile');
itemLabelRowVenue.innerText = "Venue";

let showInfoVenue = document.createElement('p');
showInfoVenue.classList.add('show__info')
showInfoVenue.innerText = "Ronald Lane";

let itemLabelRowLocation = document.createElement('p');
itemLabelRowLocation.classList.add('shows__label');
itemLabelRowLocation.classList.add('shows__label--mobile');
itemLabelRowLocation.innerText = "Location";

let showInfoLocation = document.createElement('p');
showInfoLocation.classList.add('show__info')
showInfoLocation.innerText = "San Fancisco, CA";

let showInfoButton = document.createElement('p');
showInfoButton.classList.add('shows__label');

let ticketButton = document.createElement("button");
ticketButton.classList.add('show__button');
ticketButton.innerText = "Buy Tickets"; 


ticketTable.appendChild(Row);
Row.appendChild(itemLabelRow);
Row.appendChild(showInfo);
Row.appendChild(itemLabelRowVenue);
Row.appendChild(showInfoVenue);
Row.appendChild(itemLabelRowLocation);
Row.appendChild(showInfoLocation);
Row.appendChild(showInfoButton);
showInfoButton.appendChild(ticketButton);









// for (var i = 0; i < showList.length; i++) {
    // let rowLabel = document.createElement('div');
//     rowLabel.classList.add('.show__row--label');



//     let itemLabel = document.createElement('p');
//     itemLabel.classList.add('.shows__label');
//     itemLabel.innerText = "Dates";
//     itemLabel.innerText = "Venue";
//     itemLabel.innerText = "Location";

//    let itemLabel = document.createElement('p');
//     itemLabel.classList.add('.shows__label--hidden');
//     itemLabel.innerText = "";

//     let row = document.createElement('div');
//     row.classList.add('.show__row');
    

//     let showInfo = document.createElement('p');
//     showInfo.classList.add('.shows__info');
//     info.innerText = showList[i].dates;
    
   
    // ticketTable.appendChild(rowLabel);
    // rowLabel.appendChild(itemLabel);
    // ticketTable.appendChild(row);
    // rowLabel.appendChild(showInfo);
   

// }






