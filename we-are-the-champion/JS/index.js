import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-cdbff-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const commentsListInDB = ref(database, "commentsList");

const commentFieldEl = document.querySelector(".comment-input-area");
const publishBtnEl = document.querySelector(".publish-btn");
const commentsListEl = document.querySelector(".comment-area");


//clears the text area after publishing comment

const clearCommentArea = ()=>{
  commentFieldEl.value = "";
}

const clearCommentList = ()=>{
  commentsListEl.innerHTML = "";
}

const appendCommentToCommentList = (item) => {
  let itemID = item[0];
  let itemValue = item[1];

  let newEl = document.createElement("li");

  newEl.textContent = itemValue;

  newEl.addEventListener("click", function (){
    let exactLocationOfCommentInDB = ref(database,`commentsList/${itemID}`)
    remove(exactLocationOfCommentInDB)
  })
  commentsListEl.append(newEl)
}

onValue(commentsListInDB, function(snapshot){
  if(snapshot.exists()){
    let itemsArray = Object.entries(snapshot.val())
    clearCommentList();

    for (let item = 0; item < itemsArray.length; item++){
        let currentItem = itemsArray[item];
        let currentItemID = currentItem[0];
        let currentItemValue = currentItem[1];

        appendCommentToCommentList(currentItem)

    }

  }else {
    commentsListEl.innerHTML = "No Comments here.. Yet"
  }
})


publishBtnEl.addEventListener("click",()=>{
  let inputValue = commentFieldEl.value ;
  push(commentsListInDB, inputValue);
  clearCommentArea();
  console.log(inputValue)
})
