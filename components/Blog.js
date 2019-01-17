class Blog extends React.Component {
 render() {
   return(
   <div>
    <section>
      <header>
        <h2>Blog</h2>
      </header>
      <p>
        I enjoy writing about my experiences with technology, thinking about the future, and putting my thoughts into words.
      </p>
      <p>
        Hopefully you’ll enjoy reading. If you do, you can subscribe to my monthly newsletter to read more.
      </p>
    </section>
    <style jsx>{`
    * {
      padding: 0;
    }
    div {
      width: 100%;
      background: #fff;
      border-radius: 4px;
    }
    section {
      padding: 8rem;
    }
    h2 {
      font-size: 40px;
      font-weight: 800;
      color: black;
    }
    p {
      font-size: 22px;
      font-weight: 300;
      color: black;
      line-height: 34px;
    }
    `}</style>
  </div>)
 }
}
export default Blog;
