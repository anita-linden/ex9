
const btn = document.querySelector('#btn');

function bishbosh() {
    let bish = parseInt(document.getElementById('bish').value, 10);
    let bosh = parseInt(document.getElementById('bosh').value, 10);
    let length = parseInt(document.getElementById('loop').value, 10);
    let i;
    document.getElementById("bb-output").innerText = "";
    for (i=1; i <=length;i++){
        if (i%bish===0)
        {
            if (i%bosh===0)
            {
                document.getElementById("bb-output").innerText += `Bish-Bosh\xa0`;
            }
            else
            {
                document.getElementById("bb-output").innerText += `Bish\xa0`;
            }
        }
        else if(i%bosh===0)
        {
            document.getElementById("bb-output").innerText += `Bosh\xa0`;
        }
        else
        {
            document.getElementById("bb-output").innerText += i+`\xa0`;
        }
    }
}

btn.addEventListener('click', bishbosh);

