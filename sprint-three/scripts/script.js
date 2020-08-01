


/* Shows Table Tickets */
// let showList = [
//     {
//         dates: "Mon Dec 17 2018",
//         venue: "Ronald Lane",
//         location: "San Francisco, CA",
        
//     },

//     {
//         dates: "Tue Jul 18 2019",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA",
        
//     },

// ]


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


function showCreate(showList) { 
 for (var i = 0; i < showList.length; i++) {
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
showInfo.innerText = showList[i].date ;

let itemLabelRowVenue = document.createElement('p');
itemLabelRowVenue.classList.add('shows__label');
itemLabelRowVenue.classList.add('shows__label--mobile');
itemLabelRowVenue.innerText = "Venue";

let showInfoVenue = document.createElement('p');
showInfoVenue.classList.add('show__info')
showInfoVenue.innerText = showList[i].place ;

let itemLabelRowLocation = document.createElement('p');
itemLabelRowLocation.classList.add('shows__label');
itemLabelRowLocation.classList.add('shows__label--mobile');
itemLabelRowLocation.innerText = "Location";

let showInfoLocation = document.createElement('p');
showInfoLocation.classList.add('show__info')
showInfoLocation.innerText = showList[i].location ;

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

 }
}


 getShows = () => {
    axios.get("https://project-1-api.herokuapp.com/showdates?api_key=5fe5aa5f-8066-497d-93b9-6fa22bdf1301")
        .then(results => {
            let shows = results.data
            console.log(shows)
      
           showCreate(shows)              

                    
        })
        
        .catch(err => console.log(err))
};

getShows();




