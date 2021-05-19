import React from 'react'

class Child extends React.Component {
    state = {
        qty: 0
    }

    buy = () => {
        this.setState({
            qty: this.state.qty + 1
        })
        this.props.handleTotal(this.props.price, this.state.qty)
    }

    show = () => {
        this.props.handleShow(this.props.name)
    }

    render() {
        return (
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                <button onClick={this.buy}>Buy</button>
                <button onClick={this.show}>Show</button>
                <h2>Qty: {this.state.qty} item(s)</h2>
                <hr />
            </div>
        )
    }
}

export default Child;