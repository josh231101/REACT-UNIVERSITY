import React from "react";
import ReactDOM from "react-dom";

const modalStyles = {
  zIndex: 999,
  position: "absolute",
  width: "80%",
  height: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  borderRadius: "8px",
  padding: "24px",
  transform: "translate(-50%,1100%)",
  background: "#398B98",
  color: "white",
  fontSize: "24px",
  transition: "all 400ms ease-in"
};
const closeStyles = {
  position: "absolute",
  top: "8px",
  left: "8px",
  cursor: "pointer"
};

class PortalModal extends React.Component {
  state = {
    count: 0
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log("a");
  }

  componentWillReceiveProps(props) {
    if (this.props.visible !== props) {
      this.setState((state) => ({ count: 0 }));
    }
  }
  render() {
    if (!this.props.visible) {
      return null;
    }
    return ReactDOM.createPortal(
      <div style={modalStyles}>
        GANASTE UNA CAMIONETA ÚLTIMO MODELO {this.state.count}
        <span style={closeStyles} onClick={this.props.closeModal}>
          X
        </span>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default PortalModal;
