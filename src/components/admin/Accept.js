import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import Post from './Post';
import { TextField, Button, CardActionArea, CardActions } from '@mui/material';

export default function Tutor() {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const { getLoginRole, getLoginEmail, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch,
  );
  // const [course, setCourse] = useState([]);
  // const [des, setDes] = useState([]);
  const pos = posts.map((eachPost, index) => {
    return eachPost;
  });
  console.log(pos);
  const email = useSelector(state => state.amount);
  React.useEffect(() => {
    Axios.get(
      'https://tezeract-tutoracademy-web.herokuapp.com/register/users',
    ).then(response => {
      //console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  console.log('pos:', pos);
  return (
    <div>
      {pos.map(user => {
        return user.accepts.map((poster, index) => {
          if (poster.offer) {
            return (
              <Post
                emails={poster.emails}
                course={poster.course}
                emailp={poster.email}
                coursep={poster.detail}
                descriptionp={poster.offer}
              />
            );
          }
        });
      })}
    </div>
  );
}

// {posts.forEach((user) => {
//   user.posts.map((eachPost, index) => {
//     console.log("eachPost", eachPost.course);
//     return (
//       <Posts
//         coursep={eachPost.course}
//         descriptionp={eachPost.description}
//       />
//     );
//   });
// })}
