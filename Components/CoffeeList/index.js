import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

// Store
import CoffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Coffee List",
    headerLeft: null,
    headerRight: (
      <Button onPress={() => navigation.navigate("Cart")}>
        <Icon name="cart" type="EvilIcons" />
      </Button>
    )
  });

  render() {
    const coffeeshops = CoffeeStore.coffeeshops;
    let ListItems;
    if (coffeeshops) {
      ListItems = coffeeshops.map(coffeeShop => (
        <CoffeeItem
          navigation={this.props.navigation}
          coffeeShop={coffeeShop}
          key={coffeeShop.id}
        />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);
