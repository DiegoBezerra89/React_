// import { Component } from "react";

const CardItem = ({ ...props }) => {
  const { className } = props;
  const { name, email, id } = props.monster;
  return (
    <div className={`${className}-container`}>
      <img
        alt={`${name} image`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h3 className={`${className}__name`}>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

// class CardItem extends Component {
//   render() {
//     const { className } = this.props;
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className={`${className}-container`} key={id}>
//         <img
//           alt={`${name} image`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h3 className={`${className}__name`}>{name}</h3>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default CardItem;
