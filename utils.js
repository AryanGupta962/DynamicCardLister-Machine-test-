export function fetchPostsFromAPI(){
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      return res.json();
    }).
    then((postList)=>{
      return postList;
    }).
    catch((err)=>{
      console.log("Failed to fetch Posts");
    });

}