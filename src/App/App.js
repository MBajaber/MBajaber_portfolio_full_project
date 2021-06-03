import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/layout';
import Loader from '../components/Loader/Loader';

function App() {
  const SudebarLazy = lazy(() => import('../sidebar/sidebar'));
  const MainLazy = lazy(() => import('../Pages/Home/home'));
  const AboutLazy = lazy(() => import('../Pages/About/about'));

  const routers = (
    <Switch>
      <Route path='/' component={MainLazy} exact />
      <Route path='/about' component={AboutLazy} />
    </Switch>
  );
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <SudebarLazy />
          <Layout>
            {routers}
          </Layout>
        </Suspense>
    </div>
  );
}

export default App;