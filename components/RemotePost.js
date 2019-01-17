class RemotePost extends React.Component {
  render() {
    return(
    <div className="container">
      <header>
        <h2><a href="http://localhost:3000/blog/one-day-remote-work">One Day of Remote Work</a></h2>
        <p className="post-details">December 21, 2018 · 3 min</p>
      </header>
      <section>
        <p>
          Yesterday, I had the luxury of working of from home to make sure I received a Christmas package. I say “luxury” because I understand that having the option to work from home is not available to everyone.
        </p>
        <p>
          For the past ten years of my working life, I never had the chance to do this. Nor did I ever think about it. I’m very lucky to work for a company that offers this. Here are my thoughts of how yesterday went:
        </p>
      </section>
      <section>
        <ul>
          <li>
          <h4>Communication</h4>
          <p>
            Lots of communication was done via Slack and that felt somewhat overwhelming but also productive. Most of the conversations had would normally have been through a "tap on the shoulder” if I was in the office. This was good and did not hinder productivity.
          </p>
          </li>
          <li>
          <h4>Noise</h4>
          <p>
            The sound was different. It was quiet inside my apartment compared to the office downtown (honk, honk!). I was free to play videos without needing headphones. My computer was allowed to play the sounds of delightful notifications that were created by Sound Designers—the most important being Deliveries, as that’s how I was tracking the updates for my package.
          </p> 
          </li>
          <li>
          <h4>Productivity</h4>
            <p>
              I felt that this was my most productive day by far. I designed three different parts of a major project and iterated on those designs rapidly. I also spent time writing code for this project, trying to make sure we were consistent with our styling throughout as we’ve have over 4 different engineers contribute on the frontend.
            </p> 
          </li>
          <li>
          <h4>Focus</h4>
          <p>
            Staying focused throughout the entire workday is hard. It rarely happens. I did notice, however, that being outside of the office helped provide longer periods of focus. This seemed to have occurred because I was alone. That sounds sad, but it’s the truth. Usually, I do not like being alone. I started feeling lonely around 2 o’clock. Around 3 o’clock my wife came home and that helped. Then a meeting with our design team at 4 o’clock helped remove the feeling of loneliness entirely. I’m so thankful to work with an amazing team.
          </p> 
          </li>
          <li>
          <h4>Food</h4>
          <p>
            This was probably the hardest part of not working at our downtown office. Seems silly, but I get hungry throughout the day. Often. I was fresh out of greek yogurt, berries, apples, salted almonds (sike, we never have healthy snacks at home). So, I ended up snacking on some less-healthy food and left it at that.
          </p> 
          </li>
          <li>
          <h4>Overall</h4>
          <p>
            My goal is to become remote in the upcoming years and having this small taste provided a delightful insight into the future. Just need to keep that refrigerator packed with some more snacks.  
          </p> 
          </li>
        </ul>
        <p className="post-details">— <a href="https://twitter.com/victorkernes" target="_blank">@victorkernes</a></p>
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
    section {
      margin-bottom: 24px;
    }
    h2 {
      font-size: 40px;
      font-weight: 800;
      color: #111112;
      padding-bottom: 8px;
    }
    h4 {
      font-size: 24px;
      padding-bottom: 8px;
    }
    p {
      font-size: 20px;
      font-weight: normal;
      color: #111112;
      line-height: 1.5;
      padding-bottom: 16px;
    }
    ul {
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
      padding-top: 32px;
      padding-bottom: 56px;
      max-width: 720px;
      margin: 0 auto;
    }
    header {
      padding-bottom: 24px;
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
 export default RemotePost;