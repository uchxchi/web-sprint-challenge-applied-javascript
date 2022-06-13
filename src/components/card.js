import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const div = document.createElement('div')
  const div2 = document.createElement('div')
  const div3 = document.createElement('div')
  const div4 = document.createElement('div')
  const image = document.createElement('img')
  const span = document.createElement('span')

  div.appendChild(div2)
  div.appendChild(div3)
  div3.appendChild(div4)
  div3.appendChild(image)
  div.appendChild(span)

  div.classList.add('card')
  div2.classList.add('headline')
  div2. textContent = article.headline
  div3.classList.add('author')
  div4.classList.add('img-container')
  image.src = article.authorPhoto
  span.textContent = article.authorName

  div.addEventListener('click', () => {
    console.log(`${article.headline}`)
  })

  
  return div
}
// console.log(Card())

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const endpoint = axios.get('http://localhost:5001/api/articles')
  .then(res => {
    const objectArray = res.data.articles
    const keys =Card(objectArray.bootstrap[0])
    const keysI =Card(objectArray.bootstrap[1])
    const keysII =Card(objectArray.bootstrap[2])

    const cardContainer = document.querySelector('.cards-container')
    cardContainer.append(keys)
    cardContainer.append(keysI)
    cardContainer.append(keysII)
   
    const keys2 = Card(objectArray.javascript[0])
    const keys2I = Card(objectArray.javascript[1])
    const keys2II = Card(objectArray.javascript[2])
    const keys2III = Card(objectArray.javascript[3])

    cardContainer.append(keys2)
    cardContainer.append(keys2I)
    cardContainer.append(keys2II)
    cardContainer.append(keys2III)


    const keys3 = Card(objectArray.jquery[0])
    const keys3I = Card(objectArray.jquery[1])
    const keys3II = Card(objectArray.jquery[2])

    cardContainer.append(keys3)
    cardContainer.append(keys3I)
    cardContainer.append(keys3II)


    const keys4 = Card(objectArray.technology[0])
    const keys4I = Card(objectArray.technology[1])
    const keys4II = Card(objectArray.technology[2])
    
    cardContainer.append(keys4)
    cardContainer.append(keys4I)
    cardContainer.append(keys4II)

    const keys5 = Card(objectArray.node[0])
    const keys5I = Card(objectArray.node[1])
    
    cardContainer.append(keys5)
    cardContainer.append(keys5I)
    
    // console.log(objectArray)
  })
}

export { Card, cardAppender }
