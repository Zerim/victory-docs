import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class Native extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{}}
      />
    );
  }
}

Native.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default Native;
