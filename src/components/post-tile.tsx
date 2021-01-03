import React from "react";
import { Link } from "gatsby";

import "./post-tile.css";

type PostTileProps = {
  url: string;
  title: string;
  subtitle: string;
  image: string;
  titleimage: string;
  titleimagetopmargin: string;
};

export default class PostTile extends React.Component<PostTileProps> {
  titleimage: string;
  constructor(props: PostTileProps) {
    super(props);
    if (this.props.titleimage) {
      this.titleimage = this.props.titleimage;
    } else {
      this.titleimage = `https://picsum.photos/id/${Math.floor(
        Math.random() * 100
      )}/500/300`;
    }
  }

  render() {
    return (
      <div className="post-tile">
        <Link to={this.props.url}>
          <div className="post-tile-title">{this.props.title}</div>
          <img
            src={this.titleimage}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: `center`,
              //objectPosition: `0px ${this.props.titleimagetopmargin}px`,
              height: "100%",
              width: "100%",
            }}
          />
          <div className="post-tile-subtitle">{this.props.subtitle}</div>
        </Link>
      </div>
    );
  }
}
