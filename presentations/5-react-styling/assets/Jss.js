import React from "react";
import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styles = {
  wrapper: {
    background: "#570083",
    color: "#ffad83",
    height: "100%",
    padding: "3rem"
  },
  text: {
    fontSize: 120
  }
};

const { classes } = jss.createStyleSheet(styles).attach();

const Banner = () => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.text}>Hello World!</span>
    </div>
  );
};

export default Banner;
