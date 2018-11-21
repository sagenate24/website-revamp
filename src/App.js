import React, { Component } from 'react';
import { getProjects } from './DATA/projectData'; 
import IntroLanding from './components/HomeComponents/IntroLanding';
import Projects from './components/HomeComponents/Projects';
import './App.css';

class App extends Component {
  state = {
    projects: null,
    loading: true,
  }
  componentDidMount() {
    getProjects().then((results) => {
      this.setState({
        projects: results,
      })
    }).then(() => {
      this.setState({
        loading: false,
      })
    })
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {this.state.loading
          ? <p>Loading</p>
          : (
            <div>
              <IntroLanding />
              <Projects projects={this.state.projects}/>
            </div>
          ) 
          }
      </div>
    );
  }
}

export default App;
