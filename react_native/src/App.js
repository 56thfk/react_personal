import logo from './logo.svg';
import './App.css';
import TableOfContent from './components/TableOfContent';
import Subject from './components/Subject';
import Content from './components/Content';

// className은 최상위 컴포넌트 이름
function App() {
  return (
    <div className="App">  
      <Subject title = "WEB" subTitle = "World Wide Web !"></Subject>
      <TableOfContent></TableOfContent>
      <Content title = "HTML" desc = "HTML is HyperText Markup Language"></Content>
    </div>
  );
}

export default App;
