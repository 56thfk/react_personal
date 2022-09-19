import logo from './logo.svg';
import './App.css';

// 컴포넌트 첫 글자는 대문자
function Subject() {
  return (
    <header>
      <h1>WEB</h1>
      World Wide Web !
    </header>
  );
}

function TableOfContent() {
  return(
    <nav>
      <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
          
      </ul>
    </nav>
  );
}

function Content() {
  return(
    <article>
            <h2>HTML</h2>
            HTML is HyperText Markup Language.
    </article>
  );
}

// className은 최상위 컴포넌트 이름
function App() {
  return (
    <div className="App">  
      <Subject></Subject>
      <TableOfContent></TableOfContent>
      <Content></Content>
    </div>
  );
}

export default App;
