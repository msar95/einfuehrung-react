import {Paragraph}from './Paragraph'
import {Headline} from './Headlines'

export class Message extends React.Component {
    render() {
        return (
            <div>
                <Headline headline={this.props.headline} />
                <Paragraph text={this.props.text} />
            </div>

        )
    }
}