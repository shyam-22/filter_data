import React,{Component} from 'react';
import Axios from 'axios';
import Search from './components/search/search';

// import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      searchField :"",
      userInfo : []
    };
  }

  async componentDidMount()
  {
    let item=  await Axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({userInfo : item.data});

  };
  render()
  {
    console.log(this.state.searchField);
    return(
      <div className="container">
        <div className="row">
        <Search search={e =>this.setState({searchField: e.target.value},
        console.log(this.state.searchField))} />
        </div>
          
          <div className="row">
            <Userdata info={this.state.userInfo}/>
          </div>

      </div>
    )
  }
  
}

export default App;
