// const x = document.createElement('h1');
// x.innerHTML="Hello World";


// document.body.appendChild(x)

const ul = document.createElement('ul');
document.body.appendChild(ul);

const appendChild = (data) => {
    const li = document.createElement('li');
    li.innerHTML = data;
    li.style.color = `rgb(12,23,34)`;
    ul.appendChild(li);
}

appendChild("Hello");
appendChild("World");
appendChild("I");
appendChild("am");
appendChild("Sudhanshu");
appendChild("Kumar");
