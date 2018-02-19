import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';
import About from './About';
import Chat from './Chat';
import Projects from './Projects';

// class Home extends Component {
//   render() {
//     return (
//       <div className="is-full-screen">
//         <div className="columns is-max-height is-gapless is-vcentered">
//           <div className="column is-half is-max-height is-vertical-center">
//             <About />
//           </div>
//           <div className="column is-half">
//             <Header />
//             <Switch>
//               <Route exact path="/" component={Chat} />
//               <Route exact path="/projects" component={Projects} />
//               <Redirect to="/" />
//             </Switch>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class Home extends Component {
//   render() {
//     return (
//       <div className="is-full-screen">
//         <Header />
//         <About />
//         <Switch>
//           <Route exact path="/" component={Chat} />
//           <Route exact path="/projects" component={Projects} />
//           <Redirect to="/" />
//         </Switch>
//       </div>
//     );
//   }
// }


class Home extends Component {
  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-head">
          <Header />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <Routes />
          </div>
        </div>
        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    );
  }
}
    
export default Home;