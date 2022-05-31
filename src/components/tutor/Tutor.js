import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import Posts from './Posts';
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
  const email = useSelector(state => state.amount);
  const [searchTerm, setSearchTerm] = useState('');
  React.useEffect(() => {
    Axios.get(
      'https://tezeract-tutoracademy-web.herokuapp.com/register/users',
    ).then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);
  const pos = posts.map((eachPost, index) => {
    return eachPost;
  });

  return (
    <div>
      <TextField
        style={{ width: '25%', marginTop: 20 }}
        autoComplete="off"
        id="outlined-textarea"
        label="Course Name"
        placeholder="search by course name..."
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
      />
      {pos.map(user => {
        return user.posts
          .filter(val => {
            if (searchTerm === '') {
              return val;
            } else if (
              val.course.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((poster, index) => {
            if (poster.course) {
              dispatch(actionCreators.getLoginRole(poster._id));
              return (
                <Posts
                  emailp={user.email}
                  coursep={poster.course}
                  descriptionp={poster.description}
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
