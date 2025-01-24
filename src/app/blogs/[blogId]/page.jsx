

const Blog = async({params}) => {
  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  ).then((res) => res.json());
  
  return (
    <div className="card shadow-xl max-w-xl mx-auto mt-20 ">
  <div className="card-body">
    <h2 className="text-4xl font-semibold">Title: {postData.title}</h2>
    <p><span className="text-xl font-medium">description:</span> {postData.body}</p>
  </div>
</div>
  )
}

export default Blog
