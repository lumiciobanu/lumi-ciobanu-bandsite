
let commentList = [
    {
        name: "Micheal Lyons",
        date: "12/04/2019",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        image: "../assets/images/Mohan-muruge.jpg"
    },

    {
        name: "Gary Wong",
        date: "12/04/2019",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        image: "../assets/images/male-placeholder-image.jpeg"
    },

    {
        name: "Theodore Duncan",
        date: "12/04/2019",
        comment: "How can someone be so good. You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        image: "../assets/images/male-placeholder-image.jpeg"
    }
]

const form = document.getElementById('form');
// building the NEW comments section using DOM
let commentBox = document.querySelector('.comments__box')

//creating a function to call the new comments
function displayComment(commentObject) {

    //building the structure using DOM
    let newComment = document.createElement('div')
    newComment.classList.add('comments__new')

    let userImg = document.createElement('img')
    userImg.classList.add('comments__image')
    userImg.src = commentList[i].image;

    let addComment = document.createElement('div')
    addComment.classList.add('comments__add')

    let addHeader = document.createElement('div')
    addHeader.classList.add('comments__header')

    let commentsName = document.createElement('p')
    commentsName.classList.add('comments__name')
    commentsName.innerText = commentObject.name

    let commentsDate = document.createElement('p')
    commentsDate.classList.add('comments__date')
    commentsDate.innerText = commentObject.date

    let commentsText = document.createElement('div')
    commentsText.classList.add('comments__text')

    let Text = document.createElement('p')
    // Text.classList.add()
    Text.innerText = commentObject.comment

    commentBox.appendChild(newComment)
    newComment.appendChild(userImg)
    newComment.appendChild(addComment)

    addComment.appendChild(addHeader)
    addComment.appendChild(commentsText)

    addHeader.appendChild(commentsName)
    addHeader.appendChild(commentsDate)

    commentsText.appendChild(Text)
    console.log(newComment)
}

// creating a for loop for the commentList built with these elements
for (i = 0; i < commentList.length; i++) {
    displayComment(commentList[i])

}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let userInput = event.target.yourname.value;
    let userComment = event.target.subject.value;
    let newComment = {
        name: userInput,
        comment: userComment,
        date: "07/29/2020"
    }

    commentList.unshift(newComment); //adding new comment to the beginning of the array & reseting
    form.reset();
    commentBox.innerHTML = '';


    //displaying the comments after adding the new one
    for (i = 0; i < commentList.length; i++) {
        displayComment(commentList[i])
    }

});



