const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
  .then(res => res.json())
  .then((ramenData) => {
    ramenData.forEach(displayRamenImage)

  })};
  
// index.js

const displayRamenImage = (ramen) => {
  const ramenMenu = document.querySelector('#ramen-menu')
  const ramenImages = document.createElement('img')
  ramenImages.src = ramen.image

  ramenMenu.append(ramenImages)
  ramenImages.addEventListener("click", () => { 
    handleClick(ramen)
  })
}
// Callbacks

   

const handleClick = (ramens) => {
  // Add code
  // first need to select by using getelementbyid 
  const detailImage = document.querySelector('.detail-image')
  const name = document.querySelector('.name')
  const restaurant = document.querySelector('.restaurant')
  const ratingDisplay = document.getElementById('rating-display')
  const commentDisplay = document.getElementById('comment-display')

  // second display element on the page

  detailImage.src = ramens.image
  name.textContent = ramens.name
  restaurant.textContent = ramens.restaurant
  ratingDisplay.textContent = ramens.rating
  commentDisplay.textContent = ramens.comment
 
}

const addSubmitListener = () => {
  // Add code
  const newRamen = document.querySelector('#new-ramen')

  newRamen.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const newName = e.target['new-name'].value
    const newRestaurant = e.target['new-restaurant'].value
    const newImage = e.target['new-image'].value
    const newRating = e.target['new-rating'].value
    const newComment = e.target['new-comment'].value

    // fetch("http://localhost:3000/ramens", {
    //   method: "POST", 
    //   headers: {
    //     "content-typee": "application/json",
    //   }
    //   body: JSON.stringify(newRamen),  
    // })
    // .then((res) => {
    //   if (res.status === 201) {
    //     return res.json();
    //   }
    // })
    // .then((data) => {
    //   console.log(data);
    // })

    const form = {
      "name": newName,
      "restaurant": newRestaurant,
      "image": newImage,
      "rating": newRating,
      "comment": newComment,
    }
    displayRamenImage(form)
    e.target.reset()
    
  })

}


const main = () => {
  // Invoke displayRamens here
  displayRamens()
  addSubmitListener()
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
