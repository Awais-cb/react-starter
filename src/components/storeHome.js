import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class storeHome extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { posts } = this.props
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>
              {/* Dynamic link */}
              <Link to={"/store-post/" + post.id}>
                {post.title}
              </Link>
            </td>
            <td>{post.body}</td>
            <td>
              <Button variant="primary" size="sm" onClick={() => { console.log('Edit') }}>Edit</Button>
            </td>
            <td>
              <Button variant="danger" size="sm" onClick={() => { console.log('Delete') }} className="ml-2">Delete</Button>
            </td>
          </tr>
        )
      })
    ) :
      (

        <tr>
          <td colSpan="6" className="text-center">
            <div className="spinner-border text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </td>
        </tr>

      )
    return (
      <div className="container">
        <h1>storeHome</h1>
        <Table striped bordered hover className="ninjas-table">
          <thead>
            <tr>
              <th>#</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Body</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {postsList}
          </tbody>
        </Table>
      </div>
    )
  }
}
// Accessing state of central store as props in current component
const mapStateToProps = (state) => {
  console.log(state)
  return {
    posts: state.postsReducer.posts
  }
}
// Invoking connect which returns an HOC and then wrapping the current component
export default connect(mapStateToProps)(storeHome);