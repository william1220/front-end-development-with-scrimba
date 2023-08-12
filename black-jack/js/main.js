console.log("main")


const cardObjectDefinitions = [
    {id:1, imagePath:'/black-jack/assets/cards/ace_of_diamonds.png'},
    {id:2, imagePath:'/black-jack/assets/cards/10_of_clubs.png'},
    {id:3, imagePath:'/black-jack/assets/cards/jack_of_diamonds.png'},
    {id:4, imagePath:'/black-jack/assets/cards/queen_of_hearts.png'}
]

const cardBackImgPath = '/black-jack/assets/cards/cards-back.png'

function createCard(cardItem) {
  //create a dynamic element for the card
  const cardElem = document.createElement('div')
  const cardInnerElem = createElement('div')
  const cardFrontElem = createElement('div')
  const cardBackElem = createElement('div')

  // create a dynamic element for back and front end image
  const cardFrontImg = createElement('img')
  const cardBackImg = createElement('img')

  // add class and id to card element
  addClassToElement(cardElem, 'card')
  addIdToElement(cardElem, cardItem.id)

  // add class to inner card element
  addClassToElement(cardInnerElem, 'card-inner')

  // add class to front card element
  addClassToElement(cardFrontElem, 'card-front')

  //add class to back card element
  addClassToElement(cardBackElem, 'card-back')

  //add src attribute and appropriate value to img element -back of the card
  addSrcToImageElem(cardBackElem, cardBackImgPath)

  // add src attribute and appropriate value to img element -front of card
  addSrcToImageElem(cardFrontElem, cardItem.imagePath)

  //assign class to back image elemet of back of card
  addClassToElement(cardBackElem,'card-img')

  //assign class to back image elemet of back of card
  addClassToElement(cardFrontElem,'card-img')

  //add front image element as child element front card element
  addChildElement(cardFrontElem, cardFrontImg)

  //add back image element as child element back card element
  addChildElement(cardBackElem, cardBackImg)

}

function createElement(elemType) {
  return document.createElement(elemType)
}

function addClassToElement(elem, className){
  elem.classLiss.add(className)
}

function addIdToElement(elem, id){
  elem.id = id
}

function addSrcToImageElem(imgElem, src){
  imgElem.src = src
}

function addChildElement (parentElem, childElem){
  parentElem.appendChild(childElem)
}
