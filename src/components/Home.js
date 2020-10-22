import React from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoading: true,
      error: ''
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({
        posts: response.data.slice(0, 10)
      })
    }).catch(error => {
      this.setState({
        error: error.message
      })
    }).finally(param => {
      this.setState({
        isLoading: false
      })
    })
  }
  render() {
    const { posts } = this.state
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>
              {/* Dynamic link */}
              <Link to={"/"+post.id}>
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
      this.state.isLoading ?
          <tr>
            <td colSpan="6" className="text-center">
              <div className="spinner-border text-dark" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </td>
          </tr>
      : <tr>
          <td colSpan="6" className="text-center">
            {this.state.error}
          </td>
        </tr>
    )
    return (
      <div className="container">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ipsum felis, accumsan quis tortor eu, facilisis faucibus est. Mauris lobortis mattis tortor ac gravida. Morbi sit amet ligula enim. Sed iaculis metus et elit congue varius. Cras id commodo neque. Aenean pharetra dolor nibh, vitae convallis neque tempor in. Sed bibendum nulla tellus, in semper lacus fermentum quis. In pulvinar, ex quis elementum porttitor, quam dolor interdum justo, feugiat fringilla ipsum lectus et est. Integer ultricies felis urna, nec consequat leo laoreet at. Cras semper metus in massa pretium, non convallis dui rutrum. Quisque velit eros, faucibus et feugiat eu, egestas non dui. In hac habitasse platea dictumst. Quisque nec diam molestie, tristique nisi non, sodales turpis. Phasellus sagittis erat vitae mauris efficitur, quis porttitor elit condimentum. Nam scelerisque ante fermentum quam molestie, vitae pretium tortor elementum.
        </p>
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

export default Home;