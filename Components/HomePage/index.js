import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import NavContainer from "../Navigation/index";

class HomePage extends Component {
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <NavContainer />
      </Container>
    );
  }
}

export default HomePage;
