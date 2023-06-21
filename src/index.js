console.log('Write your code here');

document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:3000/current-exhibits')
    .then(res => res.json())
    .then(data => {
       // console.log(`data i got back`, data)



        data.forEach(exhibit => {
            //console.log(`my objests`, exhibit)
            addToComments(exhibit)
            commentPoster()
            addsMakesSense(exhibit)
        })
        
    })

    // When someone submits the form for a new comment, that comment gets added to the comments-section as a p tag.

    const commentsSection = document.querySelector('#comments-section')

    function addToComments(exhibit) {
        //console.log(`commentsFunction`, exhibit)
       const commentArray = exhibit.comments
       //console.log(`it fuckin worked`, commentArray)
       commentArray.forEach(comment => {
         const pTag = document.createElement('p')
         pTag.innerText = comment 
         //console.log(`individual ptag`, pTag)
         commentsSection.appendChild(pTag)

       })
      
    }
//===========makes sense stuff 
    function addsMakesSense(exhibit) {
            console.log(`for makes sense`, exhibit)
  
        const exhibitTitle = document.querySelector('#exhibit-title')
        const exhibitDescription = document.querySelector('#exhibit-description')
        const image = document.querySelector('#exhibit-image')

        exhibitTitle.innerText = exhibit.title 
        exhibitDescription.innerText = exhibit.description 
        image.src = exhibit.image




        console.log(mainClass, h3)
    }





    function commentPoster() {
        const addComment = document.querySelector('#comment-form')
        let commentActual = addComment[0]
    
        addComment.addEventListener('submit', e => {
            e.preventDefault()
            console.log(`event`, e)
            console.log(`event target`, e.target)
            console.log(`event target we fuck with`, e.target[0])
            console.log(`event target we fuck withs value`, e.target[0].value)
            console.log(commentActual.value)
            const newP = document.createElement('p')
            newP.innerText = commentActual.value
            commentsSection.append(newP)
        })
    }

    // When someone clicks the buy-tickets-button it updates the tickets-bought element so that it increments the number of tickets. Make sure to retain the text, it shouldn't just say 1 but instead say 1 Tickets Bought.

    //=======BUTTON STUFF 
    const tickteBttn = document.querySelector('#buy-tickets-button')
    let ticketCounter = document.querySelector('#tickets-bought')
    let number = 0 
    
    tickteBttn.addEventListener('click', e => {
        number++
        ticketCounter.innerText = `${number} Tickets Bought`

        // fetch('http://localhost:3000/current-exhibits',
        // {
        //     method: 'PATCH',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },

        //     body: JSON.stringify({
        //         "tickets_bought": number++
        //     })
        //     .then(res => res.json())
        //     .then(data => console.log('yay!'))
        // })
        
    })
 
})
































