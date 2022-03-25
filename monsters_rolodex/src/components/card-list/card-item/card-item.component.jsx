import { Component } from "react";

class CardItem extends Component {
  render() {
    const { monster, className } = this.props;
    const { name, email, id } = monster;
    return (
      <div className={`${className}-container`} key={id}>
        <img
          alt={`${name} image`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h3 className={`${className}__name`}>{name}</h3>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardItem;
