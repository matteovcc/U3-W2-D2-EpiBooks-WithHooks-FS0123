
// componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization: ' your-auth-token-goes-here',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
    //     console.log(error)
    //     this.setState({ isLoading: false, isError: true })
    //   }
    // }
    
//     import { Component } from 'react'
//     import CommentList from './CommentList'
//     import AddComment from './AddComment'
//     import Loading from './Loading'
//     import Error from './Error'
    
//     class CommentArea extends Component {
//       state = {
//         comments: [],
//         isLoading: false,
//         isError: false,
//       }
//   componentDidUpdate = async (prevProps) => {
//     if (prevProps.asin !== this.props.asin) {
//       this.setState({
//         isLoading: true,
//       })
//       try {
//         let response = await fetch(
//           'https://striveschool-api.herokuapp.com/api/comments/' +
//             this.props.asin,
//           {
//             headers: {
//               Authorization: 'Bearer your-auth-token-goes-here',
//             },
//           }
//         )
//         console.log(response)
//         if (response.ok) {
//           let comments = await response.json()
//           this.setState({
//             comments: comments,
//             isLoading: false,
//             isError: false,
//           })
//         } else {
//           console.log('error')
//           this.setState({ isLoading: false, isError: true })
//         }
//       } catch (error) {
//         console.log(error)
//         this.setState({ isLoading: false, isError: true })
//       }
//     }
//   }

//   render() {
//     return (
//       <div className="text-center">
//         {this.state.isLoading && <Loading />}
//         {this.state.isError && <Error />}
//         <AddComment asin={this.props.asin} />
//         <CommentList commentsToShow={this.state.comments} />
//       </div>
//     )
//   }
// }

// export default CommentArea



// import React, { useState, useEffect } from 'react';
// import CommentList from './CommentList';
// import AddComment from './AddComment';
// import Loading from './Loading';
// import Error from './Error';

// const CommentArea = ({ asin }) => {
//   const [comments, setComments] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(
//           https://striveschool-api.herokuapp.com/api/comments/${asin},
//           {
//             headers: {
//               Authorization: 'Bearer your-auth-token-goes-here',
//             },
//           }
//         );
//         if (response.ok) {
//           const comments = await response.json();
//           setComments(comments);
//           setIsLoading(false);
//         }
//       } catch (error) {
//         setIsLoading(false);
//         setIsError(true);
//       }
//     };
//     fetchData();
//   }, [asin]);


import { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYmYyMjE1ZjQzMjAwMTRhNzg2Y2EiLCJpYXQiOjE2ODA1MjMwNDMsImV4cCI6MTY4MTczMjY0M30.xwW-DuuSEs04i-3m7edBFIhcf8wnJJ1zrt6Pdr-w1p8',
            },
          }
        );
        if (response.ok) {
          const comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
  }, [asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;