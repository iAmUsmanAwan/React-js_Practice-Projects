function customRender(reactElement, mainContainer){
/*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement)
*/

const domElement = document.createElement(reactElement.type)

domElement.innerHTML = reactElement.children

for (const prop in reactElement.props) {
    if (prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
}
mainContainer.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: "http://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)