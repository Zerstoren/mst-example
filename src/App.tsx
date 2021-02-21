import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import UsersComponent from './components/Users/Users.component';
import PostsComponent from './components/Posts/Posts.component';
import FormComponent from './components/Form/Form.component';
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={UsersComponent} />
      <Route exact={true} path="/posts" component={PostsComponent} />
      <Route exact={true} path="/form" component={FormComponent} />
    </BrowserRouter>
  );
}

export default App;
