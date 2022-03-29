// import { Component } from "react";
import CardItem from "./card-item/card-item.component";
import "./card-list.styles.css";

const CardList = ({ monsters, className }) => {
  return (
    <>
      <div className={`${className}-list`}>
        {monsters.map((monster, index) => {
          return (
            <CardItem className={className} monster={monster} key={index} />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
// class CardList extends Component {
//   render() {
//     const { monsters, className } = this.props;
//     console.log(monsters);

//     return (
//       <>
//         <div className={`${className}-list`}>
//           {monsters.map((monster) => {
//             return <CardItem className={className} monster={monster} />;
//           })}
//         </div>
//       </>
//     );
//   }
// }
