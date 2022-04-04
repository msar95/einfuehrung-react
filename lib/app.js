const myElement = React.createElement('p', {}, 'Das ist mein erstes React-Element');
const myJSXElement = /*#__PURE__*/React.createElement("p", {
  id: "myId"
}, "Das ist meine erste JSX Komponente");
ReactDOM.render(myJSXElement, document.getElementById('react-app'));