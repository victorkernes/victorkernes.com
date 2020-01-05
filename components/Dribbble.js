import React from "react";
import axios from "axios";
import DribbbleNav from "../components/DribbbleNav";

class Dribbble extends React.Component {
  componentDidMount() {
    axios
      .get(
        "https://api.dribbble.com/v2/user/shots?access_token=f8fa262dc136f778c2e367544ab8ce46a0843c9b6560a52cd88d08ca83397818"
      )
      .then(function(response) {
        if (response.data.length > 0) {
          console.log(response);
          let fragment = "";

          response.data.forEach(function(val, i) {
            fragment +=
              '<a style="width: 100%;" target="_blank" href="' +
              val.html_url +
              '" title="' +
              val.title +
              '"><img style="width: 100%; height: 100%; object-fit: cover; border-radius: 2px; box-shadow: 0 0px 1px rgba(0, 0, 0, 0.2);" src="' +
              val.images.hidpi +
              '"/></a>';
          });

          document.querySelector("#shots").innerHTML = fragment;
        }
      });
  }
  render() {
    return (
      <div className="container">
        <header>
          <DribbbleNav />
        </header>
        <section className="grid-container">
          <section className="dribbble-profile">
            <img
              className="dribbble-profile-image"
              src="../static/@victorkernes.png"
            />
            <a
              className="username"
              href="https://dribbble.com/victorkernes"
              target="_blank"
            >
              @victorkernes
            </a>
            <p>
              I design and code at Virta Health, where we reverse type 2
              diabetes.
            </p>
          </section>
          <section>
            <div className="shots" id="shots" />
          </section>
        </section>
        <style jsx>{`
          div {
            width: 100%;
          }
          .container {
            max-width: 1440px;
            padding: 64px 16px;
            margin: 0 auto;
          }
          .grid-container {
            display: grid;
            grid-template-columns: 20% auto;
            grid-gap: 2rem;
            align-items: start;
          }
          section {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin: 0 auto;
          }
          header {
            max-width: 640px;
            margin: 0 auto;
          }
          h2 {
            font-size: 28px;
            font-weight: 600;
            text-align: left;
            line-height: 50px;
            padding-bottom: 8px;
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            padding-bottom: 16px;
          }
          h4 {
            font-weight: 500;
            font-size: 16px;
            padding-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.25px;
            color: rgba(255, 255, 255, 0.2);
          }
          h3 {
            font-weight: 500;
            font-size: 22px;
            padding-bottom: 8px;
            letter-spacing: 0.25px;
            color: rgba(255, 255, 255, 1);
          }
          ul {
            list-style: none;
          }
          .shots {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 2rem;
          }
          .dribbble-profile {
            width: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, 0.07);
            text-align: center;
          }
          .dribbble-profile p {
            max-width: 280px;
          }
          .dribbble-profile-image {
            width: 80px;
            height: 80px;
            margin-bottom: 2rem;
          }
          .username {
            padding-bottom: 1rem;
            font-weight: 500;
            color: #8c7df7;
            cursor: pointer;
            text-decoration: none;
          }
          @media (max-width: 720px) {
            .shots {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: repeate(2, 1fr);
              grid-gap: 2rem;
            }
            .grid-container {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 2rem;
              align-items: start;
            }
          }
          @media (max-width: 375px) {
            .shots {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              grid-template-rows: repeat(1, 1fr);
              grid-gap: 2rem;
            }
            .grid-container {
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 2rem;
              align-items: start;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Dribbble;
