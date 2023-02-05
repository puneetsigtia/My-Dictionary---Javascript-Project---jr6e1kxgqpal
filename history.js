function gethistory(){
    const result = document.getElementById("card");
    let data = JSON.parse(localStorage.getItem("data"));
    data.map(item=>{
        result.innerHTML += ` <div class="card">
        <div class="meaning">
        <h3>${item.word}</h3>
        <p class="word-meaning">
           ${item.meanings[0].definitions[0].definition}
        </p>
        <span  onclick="deleteItems(event)"><i id="${item.word}" class="fa-solid fa-trash-can"></i></span>
        </div>
    </div>`
    })
   

}
gethistory();
function deleteItems(event){
    console.log(event.srcElement.id);
    console.log("hello",event);
    let data = JSON.parse(localStorage.getItem("data"));
    let newArr = data.filter(word => word.word != event.srcElement.id);
    localStorage.setItem("data",JSON.stringify(newArr));
    const result = document.getElementById("card");
    result.innerHTML="";
    gethistory();
}

