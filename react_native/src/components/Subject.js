function Subject(props) {
    return (
      <header>
        <h1>{props.title}</h1>
        {props.subTitle}
      </header>
    );
  }

  export default Subject;