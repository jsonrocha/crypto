import React, {Component} from 'react'

class Currency extends Component{
    render () {
        return (
            <section>
            <h3>{this.props.coins.name}</h3>
            <h3>{}</h3>
            <h3>{}</h3>
            </section>
        )
    }

}

export default Currency
