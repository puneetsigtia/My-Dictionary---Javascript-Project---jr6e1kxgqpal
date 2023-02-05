const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            savedata(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;
        })
        .catch((error) => {
            console.log(error);
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
function savedata(data){

    if(localStorage.getItem("data")){
       
        let storedItem=JSON.parse(localStorage.getItem("data"));
        let newItems;

        if(storedItem.length>=3){
            newItems=storedItem.slice(0,2);
            
        }else{
            newItems=storedItem;
         }
        newItems.push(data[0]);
        localStorage.setItem("data",JSON.stringify(newItems));
    }else{
        
        if(data && data.length>1){
            let arr=[];
            arr.push(data[0]);
            localStorage.setItem("data", JSON.stringify(arr));
        }else{
    localStorage.setItem("data", JSON.stringify(data));
        }
    }
}
