import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about.page";
import { Index } from "./pages/index.page";
import RegisterEvent from "./pages/register-event.page";
import { Blog } from "./pages/blog.page";
/* 
  3 Pages
  1.index 2.about 3.register-event
*/
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/register-event" component={RegisterEvent} />
        <Route path="/blog" component={Blog}/>
      </Switch>
    </Router>
  );
};

export default App;
