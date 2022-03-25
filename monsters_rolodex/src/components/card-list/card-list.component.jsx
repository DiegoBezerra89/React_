import { Component } from "react";
import CardItem from "./card-item/card-item.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters, className } = this.props;
    console.log(monsters);

    return (
      <>
        <div className={`${className}-list`}>
          {monsters.map((monster) => {
            return <CardItem className={className} monster={monster} />;
          })}
        </div>
      </>
    );
  }
}

export default CardList;
