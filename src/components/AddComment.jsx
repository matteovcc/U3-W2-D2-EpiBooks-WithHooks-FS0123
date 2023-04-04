// import { Component } from 'react'
// import { Button, Form } from 'react-bootstrap'

// class AddComment extends Component {
//   // state = {
//   //   comment: {
//   //     comment: '',
//   //     rate: 1,
//   //     elementId: this.props.asin,
//   //   },
//   // }

//   componentDidUpdate(prevProps) {
//     if (prevProps.asin !== this.props.asin) {
//       this.setState({
//         comment: {
//           ...this.state.comment,
//           elementId: this.props.asin,
//         },
//       })
//     }
//   }

//   sendComment = async (e) => {
//     e.preventDefault()
//     try {
//       let response = await fetch(
//         'https://striveschool-api.herokuapp.com/api/comments',
//         {
//           method: 'POST',
//           body: JSON.stringify(this.state.comment),
//           headers: {
//             'Content-type': 'application/json',
//             Authorization: 'Bearer your-auth-token-goes-here',
//           },
//         }
//       )
//       if (response.ok) {
//         alert('Comment was sent!')
//         this.setState({
//           comment: {
//             comment: '',
//             rate: 1,
//             elementId: this.props.asin,
//           },
//         })
//       } else {
//         console.log('error')
//         alert('something went wrong')
//       }
//     } catch (error) {
//       console.log('error')
//     }
//   }

//   render() {
//     return (
//       <div className="my-3">
//         <Form onSubmit={this.sendComment}>
//           <Form.Group>
//             <Form.Label>Comment text</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Add comment here"
//               value={this.state.comment.comment}
//               onChange={(e) =>
//                 this.setState({
//                   comment: {
//                     ...this.state.comment,
//                     comment: e.target.value,
//                   },
//                 })
//               }
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Rating</Form.Label>
//             <Form.Control
//               as="select"
//               value={this.state.comment.rate}
//               onChange={(e) =>
//                 this.setState({
//                   comment: {
//                     ...this.state.comment,
//                     rate: e.target.value,
//                   },
//                 })
//               }
//             >
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </Form.Control>
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     )
//   }
// }

// export default AddComment
import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: asin,
  })

  useEffect(() => {
    setComment((prevComment) => ({
      ...prevComment,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYmYyMjE1ZjQzMjAwMTRhNzg2Y2EiLCJpYXQiOjE2ODA1MjMwNDMsImV4cCI6MTY4MTczMjY0M30.xwW-DuuSEs04i-3m7edBFIhcf8wnJJ1zrt6Pdr-w1p8',
          },
        }
      )
      if (response.ok) {
        alert('Comment was sent!')
        setComment({
          comment: '',
          rate: 1,
          elementId: asin,
        })
      } else {
        console.log('error')
        alert('something went wrong')
      }
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) =>
              setComment((prevComment) => ({
                ...prevComment,
                comment: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment((prevComment) => ({
                ...prevComment,
                rate: e.target.value,
              }))
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddComment