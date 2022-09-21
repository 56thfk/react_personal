import logo from './logo.svg';
import './App.css';
import TableOfContent from './components/TableOfContent';
import Subject from './components/Subject';
import Content from './components/Content';
import {useState} from 'react';

// className은 최상위 컴포넌트 이름
function App() {
  const [mode,setMode] = useState("welcome")
  const [welcome,setWelcome] = useState({title:'welcome', desc:'Hello, React'})
  const [title,setTitle] = useState("Web")
  const [subTitle,setSubTitle] = useState("State Test!")
  const [contents,setContents] = useState([
    {id:0, title:'HTML', desc:'HTML is for infromation...'},
    {id:1, title:'CSS', desc:'CSS is for desing...'},
    {id:2, title:'JavaScript', desc:'JS is fo interactive...'},
    {id:3, title:'Node.js', desc:'NodeJS is for Server...'},
  ])

  const [selectedItem, setSelectedItem] = useState(0)

  var _title, _desc = null;
  if(mode === 'welcome') {
    _title = welcome.title
    _desc = welcome.desc
  }else if(mode === 'read') {
    _title = contents[selectedItem].title
    _desc = contents[selectedItem].desc
  }

  var onChangePage = function() {
    setMode('read')
  }
  const onClick = function() {
    setMode('welcome')
  }
  console.log("app render")

  return (
    <div className="App">  
      <Subject title = {title} subTitle = {subTitle} setMode = {setMode} onClick = {onClick}></Subject>
      <TableOfContent setSelectedItem = {setSelectedItem} onChangePage = {onChangePage} data = {contents}></TableOfContent>
      <Content title = {_title} desc = {_desc}></Content>
    </div>
  );
}

export default App;
