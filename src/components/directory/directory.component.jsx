import React from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "conserve",
          imageUrl: "https://i.ibb.co/s3nr1qx/conserve.png",
          id: 1,
          linkUrl: "shop/conserve",
        },
        {
          title: "dolci",
          imageUrl: "https://i.ibb.co/Wvg9VjP/dolci.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "ortaggi",
          imageUrl: "https://i.ibb.co/MpsJfKb/ortaggi.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "salse",
          imageUrl: "https://i.ibb.co/FJPT3q3/salse.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "preparati",
          imageUrl: "https://i.ibb.co/Zms398Z/preparati.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
