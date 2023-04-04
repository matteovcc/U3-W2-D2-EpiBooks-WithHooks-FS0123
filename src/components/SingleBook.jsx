// state = {
  //   selected: false,
  // }
  // onClick={() => this.setState({ selected: !this.state.selected })}
  
  // import CommentArea from './CommentArea'
  import { useState } from "react";
  import { Card } from "react-bootstrap";
  
  const SingleBook = (props) => {
    const [selectedBook, setSelectedBook] = useState("");
  
    const changeSelectedBookHandler = () => {
      setSelectedBook(props.book.asin);
      props.changeSelectedBook(props.book.asin);
    };
    //qua sopra diamo a selectedBook un nuovo asin ogni volta che cliccheremo un nuovo book 
  
    return (
      <>
        <Card
          onClick={changeSelectedBookHandler}
          //se la card ha lo stesso asin del selectedBook allora si colora rosso , sennò grigio 
          style={{
            border: props.selectedBook === props.book.asin ? "3px solid red" : "3px solid #ebebeb",
          }}
        >
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  };
  
  export default SingleBook;