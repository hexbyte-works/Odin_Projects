for(let i=0;i<50;i++){
    const line = document.createElement('div')
    line.classList.add("line")
    document.body.appendChild(line)
    for(let i=0;i<50;i++){
        const block = document.createElement('div')
        block.classList.add("block")
        line.appendChild(block)
    }
}
const button = document.createElement('button')
button.innerText='Clear'
document.body.appendChild(button)
button.addEventListener('click',()=>{
    const block = document.querySelectorAll('.block')
    block.forEach((block)=>{
        block.style.backgroundColor='#f5f5f5'
    })
})
const block = document.querySelectorAll('.block')
let isMouseDown = false;
document.addEventListener('mousedown',()=>{
    isMouseDown = true
})
document.addEventListener('mouseup',()=>{
    isMouseDown = false
})

block.forEach((block)=>{
    block.addEventListener('mouseover',()=>{
        if(isMouseDown){
            block.style.backgroundColor = '#808080'
        }
    })
    block.addEventListener('click',()=>{
        block.style.backgroundColor = '#808080'
        
    })
})