function TableOfContent(props) {

    var data = props.data;
    var list = [];
    var i = 0;
    while(i < data.length) {
        list.push(
          <li key = {data[i].id}><a href={"/content/" + data[i].id}data-id = {data[i].id} onClick = {
            function(e) {
              e.preventDefault();
              props.setSelectedItem(e.target.dataset.id)
              props.onChangePage()
            }
          }> {data[i].title} </a></li>
        )
        i = i + 1;
      }
    console.log("list" + list)

    return(
      <nav>
        <ul>
            {list}
        </ul>
      </nav>
    )
  }

  export default TableOfContent;