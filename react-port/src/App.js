import Header from './components/header';
import './App.css';
import Navbar from './components/nav';
import Aboutme from './components/aboutme'
import Footer from './components/footer'
// import Projects from './components/project'
// import Portfolio from './components/portfolio';
import Contact from './components/contact'

function App() {
  return (
    <div id="body">
      <Header />
      <Navbar></Navbar>
      <Aboutme></Aboutme>
      {/* <Projects></Projects> */}
      {/* <Portfolio></Portfolio> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
