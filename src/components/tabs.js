import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
   const div = document.createElement('div')
  const div2 = document.createElement('div')
  const div3 = document.createElement('div')
  const div4 = document.createElement('div')

  div.classList.add('topics')
  div2.classList.add('tab')
  div2.textContent = 'javascript'
  div3.classList.add('tab')
  div3.textContent = 'bootstrap'
  div4.classList.add('tab')
  div4.textContent =  'technology'

  div.appendChild(div2)
  div.appendChild(div3)
  div.appendChild(div4)
  
  return div
}
console.log(Tabs())

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
 const obtainTopics = axios.get('http://localhost:5001/api/topics')
  .then(res => {
    const topicsArray = res.data.topics
    const get = Tabs(topicsArray)
    const tabsContainer = document.querySelector('.tabs-container')
    tabsContainer.append(Tabs())

  })
 
}

export { Tabs, tabsAppender }
