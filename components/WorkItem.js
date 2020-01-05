import { Component } from "react";
// import BackgroundImage from "./BackgroundImage";
import classnames from "classnames";
import Markdown from "react-markdown";

export default class WorkItem extends Component {
  state = {
    open: false
  };

  onLogoClicked = () => {
    const { open } = this.state;
    this.setState({
      open: open ? false : true
    });
  };

  render() {
    const { item } = this.props;
    console.log(item);
    const title = item.fields.title;
    const excerpt = item.fields.excerpt;
    const backgroundImage = item.fields.featuredImage;
    const colour = item.fields.colour;
    const logo = item.fields.logo;
    const logoWidth = item.fields.logoWidth;
    const link = item.fields.link;
    const { open, toggledInfoBefore } = this.state;
    const itemClassnames = classnames({
      "work-feed__item": true,
      "work-feed__item--open": open
    });
    return (
      <article
        className={itemClassnames}
        style={{ backgroundColor: `#${colour}` }}
      >
        {/* <BackgroundImage image={backgroundImage} movedUp={open} /> */}
        <div className="work-feed__details">
          <div
            className="work-feed__logo-container"
            onClick={this.onLogoClicked}
          >
            {logo ? (
              <div>
                <img
                  className="work-feed__logo"
                  src={logo.fields.file.url}
                  alt={title}
                  style={{ width: `${logoWidth}px` }}
                />
                <div>
                  <span className="work-feed__indicator-copy">Toggle info</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="work-feed__info">
          <h1 className="work-feed__title">{title}</h1>
          <div className="work-feed__excerpt">
            <Markdown source={excerpt} />
          </div>
          {link ? (
            <a className="work-feed__link" href={link} target="_blank">
              <span className="work-feed__link-copy">Visit site</span>
            </a>
          ) : null}
        </div>
      </article>
    );
  }
}
