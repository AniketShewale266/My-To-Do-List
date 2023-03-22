let input_text = document.getElementById("get_text");
let add_btn = document.getElementById("add_btn");
let to_do_box = document.getElementById("to-do-box");


const addToDo = () => {
    if (input_text.value.trim() != 0) {
        const newitem = document.createElement('li');
        newitem.innerHTML =
            `   ${input_text.value}
            <i id="delete" class="fa-solid fa-xmark"></i>`;


        newitem.querySelector("i").addEventListener("click", () => {
            newitem.remove()
        })

        to_do_box.appendChild(newitem);
        input_text.value = "";

    }
    else {
        alert("Please Enter a text");
    }

}

add_btn.addEventListener("click", addToDo);


