// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  onBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="fruit-counter-container">
        <div className="fruit-counter-card-container">
          <h1 className="heading">
            Bob ate <span className="span-text">{mango}</span> mangoes
            <span className="span-text"> {banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                className="image-mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.onMango}
                className="custom-button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                className="image-mango"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.onBanana}
                className="custom-button"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
