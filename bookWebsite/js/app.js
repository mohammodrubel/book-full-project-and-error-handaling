const emptyError = document.getElementById('eror')


const searchBox = ()=>{
    const inputFeld =  document.getElementById('searchbox')
    const inputValue = inputFeld.value;
    
    
    
        if (inputValue == ''){
            document.getElementById('error').innerHTML=`<div class="alert alert-danger d-flex align-items-center" role="alert" id="eror">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
              please search correct word!
            </div>
          </div>
          `
         

        }else{
            document.getElementById("spiner").classList.remove("d-none");
            fetch(`https://openlibrary.org/search.json?q=${inputValue}`)
        .then (Response => Response.json())
        .then(data => displayShowResult(data.docs))
        document.getElementById('error').innerHTML=``;
        }
    inputFeld.value = '';
}
const displayShowResult = (books)=>{
    document.getElementById("spiner").classList.add("d-none");
    const displayContainer = document.getElementById('cardContainer')
        displayContainer.textContent='';
        if(books.length == 0){
            
            document.getElementById('secondError').innerHTML=`
            <div class="alert alert-danger" role="alert">
            please give me a correct book name
            </div>
            `

            
        }else{
            
            books.forEach(book =>{
                console.log(book)
                const div = document.createElement('div')
                div.classList.add('col')
                div.innerHTML=`
                <div class="card h-100 cardimgCustom">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                    </div>
                </div>
                `
                displayContainer.appendChild(div)
            })
            
            document.getElementById('secondError').innerHTML='';
        }
    
}

