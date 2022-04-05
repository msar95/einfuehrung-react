'use strict';

const domTaget = document.getElementById('react-app');

import { Message } from "./Message.js";


class App extends React.Component { //Klassebasierte Komponente
    render (){
        return (<div>
                <Message text="Das ist ein Property von außen" headline="Headys Headline"/>
            </div>);
    }
}
ReactDOM.render(<App/>,domTaget );