import React, { Component } from "react"

const Post = ({ pageContext }) => {
  const page = pageContext.pageInfo

  return (
    <div>
      <h1>SparkPost Post Default Template</h1>
    </div>
  )
}

export default Post