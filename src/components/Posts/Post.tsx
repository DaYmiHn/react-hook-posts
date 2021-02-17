import styled from 'styled-components';
import { PostI }  from '../../interfaces';

const Article = styled.article`
  border-radius: 5px;
  background: #fff;
  break-inside: avoid-column;
  margin-bottom: 1rem; 
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  max-width: 100%;
`;

const NickName = styled.div`
  margin-top: .125rem;
  margin-left: .5rem;
`;

const InfoUser = styled.div`
  display: flex;
  alignItems: center;
`;

function Post({post}:{post:PostI}) {
  return (
    <Article>
      <InfoUser>
        <Avatar src="https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png"/>
        <NickName className="nick">
          <span><b>{post.userNick}</b></span><br/>
          <span><b>{post.userName}</b></span>
        </NickName>
      </InfoUser>
      <hr/>
      <h6>
        {post.title}
      </h6>
      <p>
        {post.body}
      </p>
    </Article>
  );
}

export default Post;