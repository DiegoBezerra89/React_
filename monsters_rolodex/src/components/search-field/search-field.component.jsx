import { Component } from "react";

class SearchField extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchField;
