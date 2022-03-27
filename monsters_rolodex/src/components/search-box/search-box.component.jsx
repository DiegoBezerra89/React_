// import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({ ...props }) => {
  const { onChangeHandler, searchPlaceholder, className, inputType } = props;
  return (
    <input
      className={className}
      type={inputType}
      placeholder={searchPlaceholder}
      onChange={onChangeHandler}
    />
  );
};

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, searchPlaceholder, className, inputType } =
//       this.props;
//     return (
//       <input
//         className={className}
//         type={inputType}
//         placeholder={searchPlaceholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
