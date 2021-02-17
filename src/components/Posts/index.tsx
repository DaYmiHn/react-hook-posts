import styled from 'styled-components';
import Post from './Post';
import { useEffect } from 'react';
import axios from '../../service/axios';
import { useSelector, useDispatch } from 'react-redux';
import { StateI, PostI }  from '../../interfaces';

const Main = styled.main`
  columns: 250px;
  column-gap: 20px; 
`;



function Posts() {
  const dispatch = useDispatch();
  const filter = useSelector((state:StateI) => state.filter);
  const posts = useSelector((state:StateI) => state.posts);

  useEffect(()=>{
    posts && posts.map(async (post:PostI)=>{
      let {data}:any = await axios(`users?id=${post.userId}`);
      dispatch({
        type: 'UPD_POST',
        post:{
          ...post,
          userName: data[0].name,
          userNick: data[0].username
        }
      });
    })
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Main className="container">
      {
        posts && posts.filter((el:PostI)=>{
          let str = el.title + el.body + el.userName + el.userNick;
          return filter ? str.match(new RegExp(`${filter}`, "gmi")) : el;
        }).map((item:PostI, i:number) =>
          <Post  key={i} post={item}/>
        ) 
      }
    </Main>
  );
}

export default Posts; 