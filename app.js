import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FullFeaturedDemo from './codigoCustomGrid';
import Clock from './clock';
import ArticleList from './articles';
import Memos from './memos';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/memos">Memos</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/customers">
            <CustomersPage />
          </Route>
          <Route path="/books">
            <BooksPage />
          </Route>
          <Route path="/clock">
            <ClockPage />
          </Route>
          <Route path="/memos">
            <MemosPage />
          </Route>
          <Route path="/topics">
            <TopicsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

const CustomersPage = () => {
  return <FullFeaturedDemo />;
};

const BooksPage = () => {
  return <ArticleList />;
};

const ClockPage = () => {
  return <Clock />;
};

const MemosPage = () => {
  return <Memos />;
};

const TopicsPage = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
};

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
