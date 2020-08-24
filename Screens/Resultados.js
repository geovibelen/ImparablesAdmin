import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class Resultados extends Component {
  render() {
    return (
      <View styles={styles.main}>
        <Text>Resultados</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderBottomColor: "#000",
  },
});
