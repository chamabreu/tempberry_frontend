import { Route, Switch } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';
import Info from './Info';
import NotFound from './NotFound';
import TempBerry from './TempBerry';
import Welcome from './Welcome';

function App() {


  return (
    <>
      <GlobalNavBar/>
      <Switch>
        <Route path="/tempberry" component={TempBerry}/>
        <Route path="/info" component={Info}/>
        <Route path="/" component={Welcome} />
        <Route component={NotFound} />
      </Switch>
    </>
  )

}

export default App;
