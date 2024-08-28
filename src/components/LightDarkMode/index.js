// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const contentBgColor = isDarkMode ? 'black-bg' : 'white-bg'
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`content-container ${contentBgColor}`}>
          <h1 className="title"> Click To Change Mode </h1>
          <button className="button" onClick={this.onChangeMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
