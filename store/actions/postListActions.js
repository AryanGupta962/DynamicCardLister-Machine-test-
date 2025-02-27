
export const addPost=(postList)=>{

  return {type:"ADD_POSTS",payload:postList};
}

export const removePost=(id)=>{

  return {type:"REMOVE_POST",payload:id};
}

