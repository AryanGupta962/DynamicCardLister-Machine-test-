const initialState={
  loading:true,
  postList:[],
}

function postListReducer(state=initialState,action)
{
  switch (action.type){
    case "REMOVE_POST":
    {
      const newState={...state};
      newState.postList=newState.postList.filter((post)=>{
       if(post.id!==action.payload)
         return post;
      });
      console.log(newState.postList.length);
      return newState;
    }

    case "ADD_POSTS":{
      const newState={...state,loading:false};
      newState.postList=[...action.payload];
      return newState;
    }

    default:
      return state;
  }
}

export default postListReducer;