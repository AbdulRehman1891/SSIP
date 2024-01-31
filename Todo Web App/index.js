document.addEventListener("DOMContentLoaded",()=>{

    const action=document.querySelector(".add");
    const container=document.querySelector(".lists");
    let text=document.querySelector("input[type=text]");

    function CreateNewTodo(task)
    {
        let listElement=document.createElement('div');
        listElement.classList.add('list');

        listElement.innerHTML= `
        <input type="checkbox" id="${task}" name="${task}">
        <label for="${task}">${task}</label>
        <i class='bx bx-edit'></i>
        <i class='bx bx-trash'></i>
    `;

        listElement.querySelector(".bx-trash").addEventListener('click',(e)=>{
            e.preventDefault();
            listElement.remove();
        })

        listElement.querySelector(".bx-edit").addEventListener('click',(e)=>{
            e.preventDefault();
            let newtask=prompt("Enter new task");
            console.log(newtask);
            listElement.querySelector("label").innerText=newtask;
        })

        const checkbox=listElement.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change',(e)=>{
            e.preventDefault();
            const label = listElement.querySelector('label');
            if(e.target.checked)
            {
                label.classList.add("checked")
            }
            else
            {
                label.classList.remove("checked")
            }
        })

        

        container.append(listElement);
    }

    action.addEventListener('click',(e)=>{
        e.preventDefault();
        CreateNewTodo(text.value.trim());
        text.value='';
    })

    text.addEventListener('keypress',(e)=>{
        if(e.key==='Enter')
        {
            action.click();
        }
    })
})

