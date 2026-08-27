const p = document.createElement('p')
p.id="firstPara"
p.innerText="hey I'm red!"
p.style.color='red'
document.body.appendChild(p)
const h3 = document.createElement("h3")
h3.innerText="I'm a blue h3!"
h3.style.color='blue'
document.body.appendChild(h3)
const div = document.createElement("div")
div.className='div1'
div.style.backgroundColor="pink"
div.style.border='10px solid black'
const div_h1 = document.createElement('h1')
div_h1.innerText="I'm in a div"
div.appendChild(div_h1)
const div_p = document.createElement('p')
div_p.innerText='ME TOO!'
div.appendChild(div_p)
document.body.appendChild(div)
