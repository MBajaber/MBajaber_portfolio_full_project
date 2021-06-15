import React, { lazy, Suspense, useContext, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layout/layout';
import Loader from '../components/Loader/Loader';
import Sudebar from '../sidebar/sidebar';
import { MyContext } from '../Context/context';

function App() {
  const context = useContext(MyContext);
  const mainColor = useState(JSON.parse(localStorage.getItem('main_color')) || context.mainColor)[0];

  const MainLazy = lazy(() => import('../Pages/Home/home'));
  const AboutLazy = lazy(() => import('../Pages/About/about'));
  const Sevices = lazy(() => import('../Pages/Services/Services'));
  const Tops = lazy(() => import('../Pages/Top/top'));
  const Contact = lazy(() => import('../Pages/Contact/contact'));
  const Portfolio = lazy(() => import('../Pages/Portfolio/portfolio'));
  const PageNotFound = lazy(() => import('../Pages/404Page/404Page'));

  useEffect(() => {
    context.changeColor(mainColor);
  }, []);

  const routers = (
    <Switch>
      <Route path='/' component={MainLazy} exact />
      <Route path='/about' component={AboutLazy} />
      <Route path='/services' component={Sevices} />
      <Route path='/top' component={Tops} />
      <Route path='/contact' component={Contact} />
      <Route path='/portfolio' component={Portfolio} />
      <Route component={PageNotFound} />
    </Switch>
  );
    // MBajaber.github.io
    // MBajaber.github.io
    //  https://nifty-brahmagupta-02b200.netlify.app/
  return (
    <div className="App">
      <Sudebar />
        <Layout>
          <Suspense fallback={<Loader />}>
            {routers}
          </Suspense>
          </Layout>
    </div>
  );
}

export default App;