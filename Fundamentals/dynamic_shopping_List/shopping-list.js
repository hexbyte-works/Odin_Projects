const input = document.getElementById('new-item-input')
document.addEventListener('submit',(e)=>{
    e.preventDefault();
    const div = document.createElement('div')
    document.body.append(div)
    const item = document.createElement('p')
    item.innerText=input.value+" ";
    item.style="display:inline"
    const button = document.createElement('button')
    button.innerText='Delete'

    button.addEventListener('click',()=>{
        item.remove();
        button.remove()
    })
    div.append(item,button)
})