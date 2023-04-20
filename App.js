import { Component } from 'react';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';
import Freiza from './components/Freiza';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Cliquez sur les gentils</h1>
        <div>
          <ErrorBoundary>
            <Vegeta/>
          </ErrorBoundary>

          <ErrorBoundary>
            <Goku/>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Freiza/>
          </ErrorBoundary>
            
        </div>
      </div>
    );
  }
}

export default App;
