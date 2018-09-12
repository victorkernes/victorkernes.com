const Blog = () => (
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
    section {
      max-width: 308px;
      flex-direction: column;
    }
    h2 {
        font-size: 40px;
        font-weight: 800;
        color: #fff;
      }
    p {
      font-size: 22px;
      font-weight: 300;
      color: #c3c3c3;
      line-height: 34px;
    }
    @media (max-width: 720px) {
      h2 {
        font-size: 32px;
      }
      p {
        font-size: 18px;
        line-height: 28px;
      }
    }
    `}</style>
  </div>
);

export default Blog;
