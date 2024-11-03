const node_for_click = document.getElementById('for_click')

function find_edits(){
    const p1 = document.getElementsByTagName('p')[3].childNodes[1]
    console.log(p1.innerText)
    p1.innerText = 'Ryabtseva'

    const p2 = document.getElementsByTagName('p')[4].childNodes[1]
    console.log(p2.innerText)
    p2.innerText = 'Maria'

    const p3 = document.getElementsByTagName('p')[6].childNodes[1]
    console.log(p3.innerText)
    p3.innerText = 'MMV'
}

node_for_click.addEventListener("click",find_edits)
