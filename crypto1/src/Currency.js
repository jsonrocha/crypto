import React, {Component} from 'react'

class Currency extends Component {
    render () {
        return (
            <tr>
                {/* <td>Last Updated at: {this.state.last_updated.toLocaleString()}</td> */}
                <td> <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.icon}.png`} alt='crypto-icon'/> </td>
                <td>{this.props.name}</td>
                <td>{this.props.symbol}</td>
                <td className='price'>{this.props.price}</td>
                <td>{this.props.change1h}%</td>
                <td>{this.props.change24h}%</td>
            </tr>
        )
    }
}

export default Currency;