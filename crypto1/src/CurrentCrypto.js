import React, {
  Component
} from 'react';
import Currency from './Currency'

class CurrentCrypto extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coins:[]
    }
  }

  componentDidMount() {
    const _url = 'https://api.coinmarketcap.com/v2/ticker/?limit=20'
    fetch(_url).then(resp => resp.json())
      .then(newCryptoData => {

        // this.setState (object.values)      })
        console.log(Object.values(newCryptoData.data))
        this.setState({
          coins: Object.values(newCryptoData.data)
        })
      })
  }


  render() {
    return ( <div>
        This is current number of coins: {this.state.coins.length}
        <table>
<tr>
<th>Crypto</th>
<th>Symbol</th>
<th>Rank</th>
</tr>
<tr>
<td>test </td>
<td> test</td>
<td>test </td>
</tr>
</table>
      </div>
    );
  }
}

export default CurrentCrypto;
