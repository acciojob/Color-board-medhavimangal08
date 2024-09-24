//your JS code here. If required.
let bigsquare=document.querySelector(".container")
for(let i=0;i<800;i++){
	let sq=document.createElement("div")
	sq.className="square"
	sq.style.backgroundColor='rgb(29, 29, 29)';
	bigsquare.appendChild(sq)
}
