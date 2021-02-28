let htmlList = document.getElementById('list');
const addbtn = document.querySelector('#btn_add');
const delbtn = document.querySelector('#btn_remove');

function addNewEntry()
{
    let list = document.getElementById("list");
    let entry = document.getElementById("input_txt");
    let li = document.createElement("li");
    li.setAttribute('id', entry.value);
    li.appendChild(document.createTextNode(entry.value));
    li.addEventListener("click", function () {
        if (li.style.textDecoration !== "line-through")
        {
            li.style.textDecoration = "line-through";
            li.style.backgroundColor = "#CDCDCD";
        }
        else
        {
            li.style.textDecoration = "";
            li.style.backgroundColor = "#FFFFFF";
        }
        
    });
    list.appendChild(li);
}

function removeEntry()
{
    let list = document.getElementById("list");
    let entry = document.getElementById("input_txt");
    let item = document.getElementById(entry.value);
    list.removeChild(item);
}

function strikeThrough(entry)
{
       
}

addbtn.addEventListener('click', addNewEntry);
delbtn.addEventListener('click', removeEntry);