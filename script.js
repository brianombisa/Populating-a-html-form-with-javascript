let buttons = document.getElementsByTagName("button");
let count = 0;
buttons[0].addEventListener("click", (event)=>{
    event.preventDefault();
    let age = document.getElementById("age_input");
    let age_wrapper = document.getElementsByClassName("age")
    if(!age.value){
        ++count;
        age.style.border = "red solid 1px";
        let span = document.createElement("span");
        span.innerHTML = "* Input age";
        span.style.color = "red";
        if(count === 1){
            age_wrapper[0].appendChild(span);
        }
    }
    else if(Number(age.value > 0 ) && Number(age.value < 18 )){
        alert("Age must be greater than 18!");
    }else if(Number(age.value >= 18 )){
        alert("Congratulations. You can now start drinking alcohol :)");
    }else{
        alert("Invalid Age");
    }
});

buttons[1].addEventListener("click", (event)=>{
    event.preventDefault();
    let div = document.getElementsByClassName("details");
    let para = document.createElement("p");
    let element = document.createElement("label");
    element.setAttribute("for", "name");
    element.innerHTML = "Name ";
    para.appendChild(element);
    element = document.createElement("input");
    element.setAttribute("type", "text");
    para.appendChild(element);

    element = document.createElement("label");
    element.setAttribute("for", "name");
    element.innerHTML = " County ";
    para.appendChild(element);
    element = document.createElement("input");
    element.setAttribute("type", "text");
    para.appendChild(element);

    element = document.createElement("label");
    element.setAttribute("for", "name");
    element.innerHTML = " Town ";
    para.appendChild(element);
    element = document.createElement("input");
    element.setAttribute("type", "text");
    para.appendChild(element);

    div[0].appendChild(para);
});
