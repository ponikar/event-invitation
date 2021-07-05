import { lazy, Suspense } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { LoadingWithContainer } from "./components/Common/Loading/loading.component";
import { ProtectedRoutes } from "./components/Common/Routes/protected-routes.component";

const About = lazy(() => import("./pages/about.page"));
const RegisterEvent = lazy(() => import("./pages/register-event.page"));
const Index = lazy(() => import("./pages/index.page"));

const Blog = lazy(() => import("./pages/blog.page"));

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
          <Route path="/blog" component={Blog} />
          <ProtectedRoutes path="/register-event" Component={RegisterEvent} />
        </Switch>
      </Suspense>
    </Router>
  );  
};

export default App;
