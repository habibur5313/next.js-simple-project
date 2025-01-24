
export const metadata = {
  title: "Blogger.com || BlogsDetails",
};
const Blog = async({params}) => {
  
  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  ).then((res) => res.json());
  
  return (
    <div className="card shadow-xl max-w-xl mx-auto mt-20 py-10">
  <div className="card-body">
    <h1 className="text-4xl font-bold">Details of blog: {postData.id}</h1>
    <h2 className="text-4xl font-semibold">Title: {postData.title}</h2>
    <p><span className="text-xl font-medium">description:</span> {postData.body}</p>
  </div>
</div>
  )
}

export default Blog
