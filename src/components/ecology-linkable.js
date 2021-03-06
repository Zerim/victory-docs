import React from "react";
import Ecology from "ecology";
import markdown from "../markdown";

class EcologyLinkable extends React.Component {
  renderersWithHeading(pathname, otherRenderers) {
    return {
      heading: (content, level) => {
        const anchor = markdown.toAnchor(content);

        return `<h${level} id="${anchor}"><a class="Anchor" href="${pathname}#${anchor}" aria-hidden="true"></a>${content}</h${level}/>`;
      },
      ...otherRenderers
    };
  }

  render() {
    const { scope, overview, location, customRenderers } = this.props;
    const pathname = location.pathname;

    return (
      <Ecology
        playgroundtheme="elegant"
        overview={overview}
        scope={scope}
        customRenderers={this.renderersWithHeading(pathname, customRenderers)}
      />
    );
  }
}

EcologyLinkable.propTypes = {
  scope: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
  overview: React.PropTypes.string.isRequired,
  customRenderers: React.PropTypes.object.isRequired
};

EcologyLinkable.defaultProps = {
  children: null,
  customRenderers: {}
};

export default EcologyLinkable;
