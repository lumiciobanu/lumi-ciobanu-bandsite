
/* Biography Comment */

let commentList = [
    {
        name: "Mohan Muruge",
        comment: "Lorem ipsum"
    },

    {
        name: "John Doe",
        comment: "Lorem Ipsum 2"
    },

    {
        name: "John Poland",
        comment: "Lorem Ipsum 3"
    }
]

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let userInput = event.target.yourcomment.value;
    let newComment = {
        name: userInput,
        comment: "Lorem Ipsum"
    }

    commentList.push(newComment);
    form.reset();


  });


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


for (var i = 0; i < showList.length; i++) {
    let rowLabel = document.createElement('div');
    rowLabel.classList.add('.show__row--label');



    let itemLabel = document.createElement('p');
    itemLabel.classList.add('.shows__label');
    itemLabel.innerText = "Dates";
    itemLabel.innerText = "Venue";
    itemLabel.innerText = "Location";

   let itemLabel = document.createElement('p');
    itemLabel.classList.add('.shows__label--hidden');
    itemLabel.innerText = "";

    let row = document.createElement('div');
    row.classList.add('.show__row');
    

    let showInfo = document.createElement('p');
    showInfo.classList.add('.shows__info');
    info.innerText = showList[i].dates;
    
   
    ticketTable.appendChild(rowLabel);
    rowLabel.appendChild(itemLabel);
    ticketTable.appendChild(row);
    rowLabel.appendChild(showInfo);
   

}






