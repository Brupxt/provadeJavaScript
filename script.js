var título = document.createElement("h1")
título.innerHTML = "Bruna Fernandes Peixoto"
document.body.appendChild(título)

let nome = document.getElementById("nome")
let resposta = document.getElementById("resposta")

function qual()
{
    resposta.innerHTML = "Olá," + nome.value + ", tudo bem?"
}

let cm = document.getElementById("cm")
let metros = document.getElementById("metros")

function número()
{
    metros.innerHTML = (parseFloat (cm.value)) /100
}

let outro = document.getElementById("outro")
let antecessor = document.getElementById("antecessor")
let sucessor = document.getElementById ("sucessor")

function mostre()
{
    antecessor.innerHTML= (parseFloat (outro.value)) -1;
    sucessor.innerHTML = (parseFloat (outro.value)) +1;
}

var x = 5
var y = 4

if (x > y)
    {
        document.getElementById("var").innerHTML = x
    }
    else
    {
        document.getElementById("var").innerHTML = y
    }

a = 1
while (a <= 100)
    { 
        console.log(a)
        a = a + 1
    }

b = 0
while (b <= 50)
    { 
        console.log(b)
        b = b + 5
    }
c = 100
while (c >= 0)
    {
        console.log(c)
        c = c -10
    }

    let j = document.getElementById("Salário")
    let g = document.getElementById("resultado")

    function veja()
    {
        if (j <= 1250)
        { 
            g.innerHTML = (parseFloat (Salário.value))*15
        }
        else
        {
            g.innerHTML = (parseFloat (Salário.value))*10
        }
    }