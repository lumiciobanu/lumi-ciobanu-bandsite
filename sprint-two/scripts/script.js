
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
    
    
  })
  
  
/* Shows Table Tickets */
// let showList = [ 
//     {
//     dates: "Mon Dec 17 2018",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//     button: '.button'
// }, 

// {
//     dates: "Tue Jul 18 2019",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//     button: '.button'
// }, 

// ];

// let ticketTable = document.querySelector('.shows__table');


// for (var i = 0; i < showList.length; i++ ) {
//     let row = document.createElement('div');
//     row.setAttribute('class', '.show__row');
        
//     let item = document.createElement('div');
//     item.setAttribute('class', 'shows__item' );
   
//     let column = document.createElement('div');
//     column.setAttribute('class', 'column' );

//     let label = document.createElement('div');
//     label.setAttribute('class', 'label' );
//     label.innerText = 'Dates';

//     let info = document.createElement('div');
//     info.setAttribute('class', 'shows__info' );
//     info.innerText = showList[i].venue;

//     ticketTable.appendChild(row); 
//     row.appendChild(item);
//     item.appendChild(column);
//     column.appendChild(label);
//     label.appendChild(info);

    
// }

//Note to TA: I've got error 'Cannot read property 'appendChild' of null and I don't know where it comes from and how to fix it




