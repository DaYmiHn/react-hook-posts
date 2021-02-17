import { useDispatch } from 'react-redux'

function Search() {
  let dispatch = useDispatch();
   
  return (
    <input 
      type="text" 
      style={{width:'500px', margin: "0 auto"}} 
      placeholder="Строка поиска..." 
      onChange={(event:any)=>{
        dispatch({
          type:"FILTER_POSTS", 
          value: event.target.value}
        )} 
    } />
  );
}

export default Search;
