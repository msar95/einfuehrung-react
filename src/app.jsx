'use strict';

const domTaget = document.getElementById('react-app');

import { Message } from "./Message.js";

/* function Paragraph(props){ //Funktionalbasierte Komponente
    return <p>Das ist unsere zweite React component</p>
}
 */


class App extends React.Component { //Klassebasierte Komponente
    render (){
        return (<div>
                <Message text="Das ist ein Property von außen" headline="Headys Headline"/>
            </div>);
    }
}
ReactDOM.render(<App/>,domTaget );