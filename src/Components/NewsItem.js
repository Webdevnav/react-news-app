import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card h-100">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}
          >
            <span className=" badge rounded-pill bg-primary">BY- {source}</span>
          </div>
          <img
            src={imgUrl ? imgUrl : "https://s.w-x.co/in-blackhole_gif.gif"}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body mx-3">
            <h5 className="card-title text-truncate "> {title}...</h5>
            <p className="card-text text-truncate">
              {description ? description : "CLick to Read more"}...
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                {author ? author : "Unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
