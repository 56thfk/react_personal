function Subject(props) {
    return (
      <header>
        <h1>
          <a href="/test.html" onClick={function(e) {
            e.preventDefault();
            props.setMode("read")
          }}> {props.title} </a></h1>
        {props.subTitle}
        <button onClick = {props.onClick}> OK </button>
      </header>
    );
  }

  export default Subject;