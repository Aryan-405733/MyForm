array1=[];
const btn = document.querySelector("#submit1");
const form = document.querySelector("#form");

btn.addEventListener ("click",(e)=>{
    e.preventDefault();

    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);

    let obj=Object.fromEntries(values);
    array1.push(obj);
    
    localStorage.setItem("userData", JSON.stringify(array1));
    
    
});

