import { Message } from "./Message";

export class App extends React.Component { //Klassebasierte Komponente
    render() {
        return (<div>
            <Message text="Das ist ein Property von außen" headline="Headys Headline" />
        </div>);
    }
}