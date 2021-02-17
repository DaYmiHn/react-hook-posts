import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PostI }  from '../interfaces';

function todos(state:{posts:PostI[]} = {posts:[]}, action:any) {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        posts: [...state.posts, ...action.posts]
      }
    case 'UPD_POST':
      return {
        posts: [
          ...state.posts.map((post:PostI, index:number) => {
            return post.id === action.post.id ? action.post : post
          })
        ]
      }
    case 'FILTER_POSTS':
      return {
        ...state,
        filter: action.value
      }
    default:
      return state
  }
}

export default createStore(
  todos,
  composeWithDevTools()
)