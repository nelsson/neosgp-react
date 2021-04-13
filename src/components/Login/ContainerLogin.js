import { connect } from "react-redux";
import { fetchLogin } from "../../store/login";

import TemplateLogin from "./TemplateLogin";

const mapStateToProps = (state) => {
  return {
    login: state.loginState.loginUser
  };
};

const mapDispatchToProps = (dispatch) => ({
   fetchLogin: (data) => dispatch(fetchLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateLogin);
