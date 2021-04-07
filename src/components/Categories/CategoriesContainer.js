import { connect } from "react-redux";
import { fetchCategories } from "../../store/categories";

import TemplateCategories from "./TemplateCategories";

const mapStateToProps = (state) => {
  return {
    categories: state.categoriesStore.categories,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateCategories);
