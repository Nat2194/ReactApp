import React from "react";
import * as Font from "expo-font";
import { createIconSetFromFontello } from "@expo/vector-icons";

// Custom imports
import styles from "../styles";
import fontelloConfig from "../assets/fontello/config.json";

const Icon = createIconSetFromFontello(
  fontelloConfig,
  "basketball",
  "basketball.ttf"
);

let customFonts = {
  basketball: require("../assets/fontello/font/basketball.ttf"),
};

export type IconsProps = {
  name: string;
  color: string;
  size: number;
};

export default class Icons extends React.Component<IconsProps> {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <Icon
        name={this.props.name}
        color={this.props.color}
        size={this.props.size}
      />
    );
  }
}
