let title=document.getElementById("title");
let notes=document.getElementById("notes");
let btn=document.getElementById("btn");
let add=document.getElementById("add");
let form=document.getElementById("form");
add.addEventListener("click",(e) =>{
    e.preventDefault();
      let form=document.getElementById("form");
     form.style.display="block";

})
let array=[];
btn.addEventListener("click",(e) =>{
    e.preventDefault();
    form.style.display="none";
    let ul_list=document.getElementById("ul-list");
    let list=document.createElement("li");
    let value= title.value
    array.push(value);
    console.log(array)
   console.log(value);
    ul_list.appendChild(list);
    ul_list.appendChild(array);
    // add.appendChild(array[0])
});