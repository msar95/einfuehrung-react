'use strict';

const domTaget = document.getElementById('react-app');
import { Message } from "./Message.js";
/* function Paragraph(props){ //Funktionalbasierte Komponente
    return <p>Das ist unsere zweite React component</p>
}
 */

class App extends React.Component {
  //Klassebasierte Komponente
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Message, {
      text: "Das ist ein Property von au\xDFen",
      headline: "Headys Headline"
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTaget);