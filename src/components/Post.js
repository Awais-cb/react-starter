import React from 'react'
import axios from 'axios'

class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      postId:'',
      postTitle:'',
      postBody:''
    }
  }
  componentDidMount() {
    let id = this.props.match.params.post_id
    console.log(id);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      this.setState({
        postId: res.data.id,
        postTitle: res.data.title,
        postBody: res.data.body
      })
    }).catch({

    }).finally({

    })
  }
  render () {
    let { postId } = this.state
    let postContent = (postId) ?
      (   
        <div>
          <h5 className="card-title">{this.state.postTitle}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.state.postTitle}</h6>
          <p className="card-text">{this.state.postBody}</p>
          <button href="#" className="btn btn-danger btn-sm">Delete Post</button>
        </div>
      )
    : (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
    );
    return (
      <div className='container'>
        <div className="card">
          <div className="card-body">
            {postContent}
          </div>
        </div>
      </div>
    )
  }
}

export default Post