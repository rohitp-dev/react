function customRender(createElement, container)
{
    const domElement = document.createElement(createElement.type);
    domElement.innerHTML = createElement.children;
    domElement.setAttribute("href", createElement.props.href);
    domElement.setAttribute("target", createElement.props.target);

    container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root")


const reactElements={
    type:"a",
    props:{
        href:"https://www.fb.com",
        target:"_blank"
    },
    children:"Click me to visit Gooooooogle"
}

customRender(reactElements,mainContainer);