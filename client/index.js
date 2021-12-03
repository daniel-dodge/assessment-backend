const fortuneHolder = document.querySelector('#fortuneHolder')
const fortuneButton = document.querySelector('#fortune-btn')
const fortuneClearBtn = document.querySelector('#clear-btn')
const editBtn = document.querySelector('#edit-btn')
const listHolder = document.querySelector('#list-holder')

document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/")
      .then(function (response) {
        const data = response.data;
        alert(data);
      });
};
document.querySelector('#fortune').onclick = () => {
  axios.get("http://localhost:4000/api/fortune")
  .then((res) => {
    
    const fortune = res.data
    fortuneHolder.textContent = fortune
    alert("Here is your fortune!")
    
})
}

const addFortune = (body) => {
axios.post("http://localhost:4000/api/fortune", body)
.then((res) => {
   alert(`Fortune added! There are now ${res.data} fortunes.`)
  })
}
const clearFortunes = () => {
    axios.delete("http://localhost:4000/api/fortune")
    .then((res) =>{
    alert(`Fortunes cleared! There are now ${res.data} fortunes`)
    })
}

const viewFortunes = () => {
    axios.get("http://localhost:4000/api/fortune/list")
    .then((res) =>{
        if (listHolder.childElementCount > 0){
        listHolder.innerHTML =''
    }
        for (let i = 0; i < res.data.length; i++){
            console.log(res.data[i])
            const listSection = document.createElement("section")
            let list = document.createElement('li')
            list.textContent = res.data[i]
            listSection.appendChild(list)
            listHolder.appendChild(listSection)
        }
    })
}

const hideList = () => {

}


const submitFortune = () => {
    const fortuneInput = document.querySelector('#postFortune')
    let newFortuneObj = {
        fortuneInput : fortuneInput.value
    }
    addFortune(newFortuneObj)
    fortuneInput.value = ""
}
const clearUserFortunes = () =>{
    clearFortunes()
}


fortuneButton.addEventListener("click",submitFortune)
fortuneClearBtn.addEventListener("click", clearUserFortunes)
editBtn.addEventListener("click", viewFortunes)