const second=document.querySelector('.second');
//

const fun=async ()=>{
    const jokes= await fetch('https://icanhazdadjoke.com/slack');
    const mainOne=await jokes.json();
    //return mainOne.attachments[0].text;
    second.innerHTML+=`<p>${mainOne.attachments[0].text}<P>`;
}
fun();
//fun().then(data=>console.log(data));



