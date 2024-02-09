import './App.css';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  /*
    TO DO - Create state in  functional React component
    in the state, have route: 'page1';
    correct onRouteChange et al as needed to modify ZTM example from class to functional component
  */
  
    const onRouteChange = () => {
      this.setState( { route: route });// <-- TO DO - change for functional component
      //What to do instead of this.setState?
    }
  
    if (this.state.route === 'page1') {
        return <Page1 onRouteChange={onRouteChange}/>
    } else if (this.state.route === 'page2') {
      return <Page2 onRouteChange={onRouteChange}/>
    } else if (this.state.route === 'page3') {
      return  <Page3 onRouteChange={onRouteChange}/>
    }
}

export default App;
