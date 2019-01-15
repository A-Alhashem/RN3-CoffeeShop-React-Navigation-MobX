import React, { Component } from "react";
import { Button, Icon } from "native-base";

class CartButton extends Component {
  render() {
    return (
      <Button onPress={() => navigation.navigate("Cart")}>
        <Icon name="cart" type="EvilIcons" />
      </Button>
    );
  }
}

export default CartButton;
