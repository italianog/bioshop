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
          linkUrl: "shop/dolci",
        },
        {
          title: "ortaggi",
          imageUrl: "https://i.ibb.co/MpsJfKb/ortaggi.jpg",
          id: 3,
          linkUrl: "shop/ortaggi",
        },
        {
          title: "salse",
          imageUrl: "https://i.ibb.co/FJPT3q3/salse.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/salse",
        },
        {
          title: "preparati",
          imageUrl: "https://i.ibb.co/Zms398Z/preparati.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/preparati",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
