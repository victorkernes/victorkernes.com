class NewSocialNetwork extends React.Component {
  render() {
    return(
    <div className="container">
     <section>
       <header>
         <h2><a href="/blog/new-social-network">A New Social Network</a></h2>
         <p className="post-details">by <a href="https://twitter.com/victorkernes" target="_blank">@victorkernes</a> · January 6, 2019</p>
       </header>
       <p>I subscribe to a newsletter called <a href="https://mavengame.com/" target="_blank">“The Maven Game”</a>, and it is one of the few that I read from beginning to end whenever there’s a new post.
       </p>
       <p>
        A few months ago, David included a snippet that talked of an idea he had for a new type of social media. He had quit both Twitter and Instagram and was looking for something simpler.
       </p>
       <p>
        Here’s what it looks like:
       </p>
       <ol>
         <li>
          <p>
            <strong>1. Living (Yes/No):</strong> Are you still alive?
          </p>
         </li>
         <li>
          <p>
            <strong>2. Marital Status (Married/Single):</strong> Are you married?
          </p> 
         </li>
         <li>
          <p>
            <strong>3. Children (#):</strong> How many kids do you have?
          </p> 
         </li>
         <li>
          <p>
            <strong>4. Opportunity (Open/Closed):</strong> Are you interested in new opportunities?
          </p>
          <blockquote>
           <p>This flag is set either to Open or Closed. Open means you’re interested in hearing about new opportunities: full, part-time, freelance, side hustle, whatever. Closed means you’re not open for business: you’re busy, retired, don’t bother me. Simple, and unlikely to set off alarm bells with the boss.</p> — David Molwear
          </blockquote>
         </li>
         <li>
          <p>
            <strong>5. Location:</strong> Are you closeby? Is it physically possible to meet up for coffee?
          </p> 
         </li>
       </ol>
       <hr />
       <p>
        I loved this idea. I’m going to try and do the same, at least for the month of January. Here’s my quick go at adding my <a href="/now" target="_blank">“profile.”</a>
       </p>
       <p>
        <a href="https://mavengame.com/2018/06/to-get-unstuck-on-your-next-project-start-with-a-frame/" target="_blank">Check out the original post here</a>
       </p>  
     </section>
     <style jsx>{`
    @import url('https://rsms.me/inter/inter-ui.css');
    * {
      padding: 0;
      margin: 0;
      font-family: 'Inter UI', sans-serif;
    }
    div {
      width: 100%;
      background: #fff;
      border-radius: 4px;
    }
    h2 {
      font-size: 40px;
      font-weight: 800;
      color: #111112;
      padding-bottom: 8px;
    }
    p {
      font-size: 20px;
      font-weight: normal;
      color: #111112;
      line-height: 1.5;
      padding-bottom: 16px;
    }
    ol {
      list-style: none;
    }
    li {
      font-size: 20px;
      font-weight: normal;
      color: black;
      line-height: 32px;
    }
    span {
      font-size: 16px;
      color: #595959;
      text-transform: uppercase;
    }
    a {
      font-size: 20px;
      text-decoration: none;
      font-weight: 600;
      color: #2455c3;
    }
    a:hover {
      padding-bottom: 4px;
      border-bottom: 2px solid #2455c3;
      cursor: pointer;
    }
    h2 a {
      font-size: 40px;
      font-weight: 800;
      color: black;
    }
    h2 a:hover {
      color: #2455c3;
      text-decoration: none;
      cursor: pointer;
      border-bottom: none;
    }
    .container {
      padding: 32px;
      padding-bottom: 56px;
      max-width: 720px;
      margin: 0 auto;
    }
    header {
      padding-bottom: 32px;
    }
    hr {
      border: 1px solid #111112;
      margin-top: 8px;
      margin-bottom: 24px;
    }
    blockquote {
      font-size: 18px;
      width: 100%;
      font-style: italic;
      padding-left: 24px;
      margin-bottom: 16px;
      border-left: 2px solid #111112;
    }
    blockquote p {
      font-size: 18px;
    }
    .post-details {
      font-size: 18px;
      color: #595959;
      padding-bottom: 0;
    }
    .post-details a {
      font-size: 18px;
      color: #2455c3;
    }
    .post-details a:hover {
      padding-bottom: 4px;
      border-bottom: 2px solid #2455c3;
      cursor: pointer;
    }
     `}</style>
   </div>)
  }
 }
 export default NewSocialNetwork;