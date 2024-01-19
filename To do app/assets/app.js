const input = document.querySelector('input');
const btn = document.querySelector('.row > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) =>{
    (e.keyCode === 13? addList(e) : null)
})

function addList(e){
    const notCompleted = document.querySelector('.notcompleted');
    const Completed = document.querySelector('.completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="ri-check-line"></i>';
    delBtn.innerHTML = '<i class="ri-close-circle-line"></i>';

    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);

    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    })

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    })

}

