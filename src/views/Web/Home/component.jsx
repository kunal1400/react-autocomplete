import React, { Component } from "react"
// import { Link } from "react-router-dom"
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterData: [],
      inputValue: ''
    }
  }
  componentWillMount = () => {
    this.props.fetchMenus()
  }
  componentWillReceiveProps = (np) => {
    console.log(np.data.data, 'componentWillReceiveProps')
  }
  handleClick(data) {
    this.setState ({inputValue:data.username, filterData: []}, ()=>{

    })
  }
  handleChange (e) {
    if (e.target.value) {
      let filterData = []
      var search_term = e.target.value
      search_term  = search_term.toLowerCase();
        this.props.data.data.forEach(item => {
          if(item.username.toLowerCase().indexOf(search_term) !== -1 ){
          console.log(item);
          filterData.push( item );
        }
        this.setState({filterData: filterData, inputValue:e.target.value})
      })
    } else {
      this.setState ({inputValue:'', filterData: []}, ()=>{

      })
    }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <p>React AutoComplete</p>
          <form autoComplete="off">
            <div className="autoComplete">
              <input value={this.state.inputValue} id="myInput" type="text" name="myCountry" onChange={this.handleChange.bind(this)} placeholder="Username"/>
              {this.state.filterData && this.state.filterData.length > 0 ?
                <div>
                {
                  this.state.filterData.map((data, i)=>{
                    return (
                    <p onClick={this.handleClick.bind(this,data)}>{data.username}</p>
                    )
                  })
                }
                </div>
                : ''}
            </div>
          </form>
        </header>
      </div>
    )
  }
}

export default Home
