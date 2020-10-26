import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class storePost extends React.Component {
  constructor(props) {
    super(props)
  }

  handleDelete = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/store-home')
  }

  render() {
    console.log(this.props)
    let { post } = this.props
    let postContent = (post) ?
      (
        <div>
          <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{post.title}</h6>
          <p className="card-text">{post.body}</p>
          <button href="#" className="btn btn-danger btn-sm" onClick={this.handleDelete}>Delete storePost</button>
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

// This will map the state to component's props (subscribing store)
const mapStateToProps = (state, ownProps) => {
  // This should be exact as parameter defined to access route
  let id = ownProps.match.params.post_id
  return {
    post: state.postsReducer.posts.find(post => post.id == id)
  }
}

// This is going to map dispatches to props of component (dispatch actions to the store)
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost : (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(storePost)