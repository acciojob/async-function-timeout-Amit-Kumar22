//your JS code here. If required.
const button=document.getElementById("btn");
const msginp=document.getElementById("text");
const delayinp=document.getElementById("delay");
const output=document.getElementById("output");

button.addEventListener("click",()=>{
	const msg=msginp.value;
	const delay=Number(delayinp.value);
	if(msg && delay>0){
		call(msg,delay);
	}
})
async function call(msg,delay){
	await new Promise((resolve)=>{
			setTimeout((dealy)=>{
				resolve();
			},delay)
		})
	output.innerText=msg;
}