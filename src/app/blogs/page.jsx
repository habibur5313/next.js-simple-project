import Link from "next/link";
import React from "react";

const page = async () => {
  const postData = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-3xl font-semibold py-4 text-purple-700">
        All Blogs is here
      </h1>
      <p className="text-xl font-medium text-center pb-5">
        If you want to see the details of the blog. then click on the view details
        button.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {postData.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold">
                Title: {post.title.slice(0, 15)}...
              </h2>
              <p>
                <span className="text-xl font-medium">description:</span>{" "}
                {post.body.slice(0, 60)}...
              </p>
              <div className="card-actions justify-end">
                <Link href={`/blogs/${post.id}`}>
                  <button className="btn border-b-4 text-xl font-medium border-b-orange-400 text-orange-400 hover:btn-primary ">
                    view details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
