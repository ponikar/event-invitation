import { lazy, Suspense } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { LoadingWithContainer } from "./components/Common/Loading/loading.component";

const About = lazy(() => import("./pages/about.page"));
const RegisterEvent = lazy(() => import("./pages/register-event.page"));
const Index = lazy(() => import("./pages/index.page"));

/* 
  3 Pages
  1.index 2.about 3.register-event
*/
const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingWithContainer />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/register-event" component={RegisterEvent} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
