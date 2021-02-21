import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import UsersComponent from './components/Users/Users.component';
import PostsComponent from './components/Posts/Posts.component';
import FormComponent from './components/Form/Form.component';
import { USERS_ROUTE } from './components/Users/const';
import { POSTS_ROUTE } from './components/Posts/const';
import { FORM_ROUTE } from './components/Form/const';
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path={USERS_ROUTE} component={UsersComponent} />
      <Route exact={true} path={POSTS_ROUTE} component={PostsComponent} />
      <Route exact={true} path={FORM_ROUTE} component={FormComponent} />
    </BrowserRouter>
  );
}

export default App;
