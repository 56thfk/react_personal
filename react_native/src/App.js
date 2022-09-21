import logo from './logo.svg';
import './App.css';
import TableOfContent from './components/TableOfContent';
import Subject from './components/Subject';
import Content from './components/Content';
import {useState} from 'react';

// className은 최상위 컴포넌트 이름
function App() {
  const [title,setTitle] = useState("Web")
  const [subTitle,setSubTitle] = useState("State Test!")
  const [contents,setContents] = useState([
    {id:0, title:'HTML', desc:'HTML is for infromation...'},
    {id:1, title:'CSS', desc:'CSS is for desing...'},
    {id:2, title:'JavaScript', desc:'JS is fo interactive...'},
    {id:3, title:'Node.js', desc:'NodeJS is for Server...'},
  ])

  return (
    <div className="App">  
      <Subject title = {title} subTitle = {subTitle}></Subject>
      <TableOfContent data = {contents}></TableOfContent>
      <Content title = "HTML" desc = "HTML is HyperText Markup Language"></Content>
    </div>
  );
}

export default App;
