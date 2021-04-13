import { connect } from "react-redux";
import { fetchCreateProject } from "../../store/projects";

import OpenNewProyect from "./TemplateModal";

const mapStateToProps = (state) => {
   console.log('state!!!', state)
   console.log('fetch', fetchCreateProject)
  return {
    createProject: state.projectState.createProject
  };
};

const mapDispatchToProps = (dispatch) => ({
   fetchCreateProject: (data) => dispatch(fetchCreateProject(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenNewProyect);
