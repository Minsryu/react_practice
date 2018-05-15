import React from "react";
import AddFishFrom from "./AddfishForm.js";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory!</h2>
        <AddFishFrom addFish={this.props.addFish} />
      </div>
    );
  }
}

export default Inventory;
