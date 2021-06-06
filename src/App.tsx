import React, {Suspense} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { USERS_ROUTE } from './components/Users/const';
import { POSTS_ROUTE } from './components/Posts/const';
import { FORM_ROUTE } from './components/Form/const';
import "./App.scss";

const UsersComponent = React.lazy(() => import('./components/Users/Users.component')) ;
const PostsComponent = React.lazy(() => import('./components/Posts/Posts.component'));
const FormComponent = React.lazy(() => import('./components/Form/Form.component'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Route exact={true} path={USERS_ROUTE} component={UsersComponent} />
        <Route exact={true} path={POSTS_ROUTE} component={PostsComponent} />
        <Route exact={true} path={FORM_ROUTE} component={FormComponent} />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
