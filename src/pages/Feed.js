import { Link } from 'react-router-dom';
import { useState } from 'react';

import Photos from '../assets/Assets'
import iFollowedUser from '../assets/photo-prof.png'

import iLike from "../assets/icons/love-icon.png"
import iComment from "../assets/icons/comment-icon.png"
import iMsg from "../assets/icons/paper-plane-icon.png"
import './feed.css'

import DetailFeed from '../components/modal/DetailFeed'

const Feed = ({ title }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [postData, setPostData] = useState('')

  const detailModalToggle = (e) => {
    console.log('Detail Modal Toggle...');
    setDetailModal(!detailModal)
    setPostData(e)
  }
  return (
    <div>
      <h1>{title}</h1>
      <div className="posts-wrapper">
        {
          Photos.map(
            (img, index) => (
              <div key={index} className="card">
                <div className="thumbnail" onClick={() => detailModalToggle(img.file)}>
                  <img src={img.file} alt={img.name} />
                </div>
                <div className="info">
                  <Link className="user" to='/zayn'>
                    <div className="user-img">
                      <img src={iFollowedUser} alt="" />
                    </div>
                    <div className="username">
                      <h4>zayn</h4>
                    </div>
                  </Link>
                  <div className="action">
                    <div className="like">
                      <img className="icons" src={iLike} alt="icon" />
                    </div>
                    <div className="comment">
                      <img className="icons" src={iComment} alt=" icon" />
                    </div>
                    <div className="message">
                      <img className="icons" src={iMsg} alt=" icon" />
                    </div>
                  </div>
                </div>
                <div className="likes">126.100 Like</div>
              </div>
            )
          )
        }
      </div>
      <DetailFeed modalStat={detailModal} modalClose={detailModalToggle} postData={postData} />
    </div >
  )
}

Feed.defaultProps = {
  title: 'Feed'
}

export default Feed