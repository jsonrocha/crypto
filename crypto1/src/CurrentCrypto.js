import React, { Component } from 'react';
import Currency from './Currency'

class CryptoMarket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coins: [],
            // last_updated: new Date()
            
        }
    }

    componentDidMount () {
        setInterval (() => {
            const _url = "https://api.coinmarketcap.com/v2/ticker/?limit=200";
            fetch(_url).then(resp => resp.json()).then(cryptoData => {
            this.setState({coins: Object.values(cryptoData.data),
              //  last_updated: new Date()
            })
        
            }) 
        }, 5000)
    }

    render () {
        return (
            this.state.coins.map((coin, idx) => {
                return ( < Currency
                // update = {coin.last_updated}
                name = {coin.name}
                icon = {coin.id}
                symbol = {coin.symbol}
                price = {coin.quotes.USD.price.toFixed(2)}
                change1h = {coin.quotes.USD.percent_change_1h}
                change24h = {coin.quotes.USD.percent_change_24h}
                key = {idx} />
            )})
        )       
    }    
}

export default CryptoMarket;
