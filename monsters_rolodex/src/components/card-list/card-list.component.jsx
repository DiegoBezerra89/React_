import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters, className } = this.props;

    return (
      <>
        <div className={className}>
          {monsters.map((monster) => (
            //card
            <div className="card-list__item">
              <h1 key={monster.id}>{monster.name}</h1>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CardList;
