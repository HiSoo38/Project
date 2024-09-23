import logo from './logo.svg';
import './App.css';
function Header(){
  return<header>
    <h1><a href="/">WEB</a></h1>
  </header>
}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <Header/>
    </div>
  );
}

export default App;
