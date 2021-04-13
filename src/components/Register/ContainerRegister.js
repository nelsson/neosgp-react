import { connect } from "react-redux";
import { fetchRegister } from "../../store/register";

import TemplateRegister from "./TemplateRegister";

const mapStateToProps = (state) => {
  return {
    REGISTER: state.loginState.loginUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchRegister: (data) => dispatch(fetchRegister(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateRegister);
