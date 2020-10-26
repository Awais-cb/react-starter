import React from 'react'
import { connect } from 'react-redux'

class storePost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { post } = this.props
    let postContent = (post) ?
      (
        <div>
          <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{post.title}</h6>
          <p className="card-text">{post.body}</p>
          <button href="#" className="btn btn-danger btn-sm">Delete storePost</button>
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

const mapStateToProps = (state, ownProps) => {
  // This should be exact as parameter defined to access route
  let id = ownProps.match.params.post_id
  return {
    post: state.postsReducer.posts.find(post => post.id == id)
  }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps)(storePost)