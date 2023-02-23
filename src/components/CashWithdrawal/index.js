import {Component} from 'react'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    return (
      <div className="container">
        <div className="sub-container">
          <div className="user-details-container">
            <p className="logo">S</p>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-details-container">
            <p className="balance">Your Balance</p>
            <p className="amount">
              200
              <br />
              <span className="rupees">In Rupees</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
