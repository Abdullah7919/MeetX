import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios.js";

function Posts({userId}) {
  const { isLoading, error, data } = useQuery(["posts"], () => {
    return makeRequest.get("/posts?userId="+userId).then((res) => {
      return res.data;
    });
  });
  
  return (
    <div className="posts">
      {error ? "something went wrong" :(isLoading ? "loading" : data.map((post) => (
        <Post post={post} key={post.id} />
      )))}
    </div>
  );
}

export default Posts;
