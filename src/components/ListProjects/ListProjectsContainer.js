import { connect } from 'react-redux';
import { getReceiveProjects } from '../../store/projects/operations';

import ListProjects from './ListProjects';

const test = () => {
    console.log('console en container');
};

const mapStateToProps = (state) => {
    console.log(' container', state);
  
    return {
        listProjects: state.projectState.listProjects,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getReceiveProjects: () => dispatch(getReceiveProjects()),
    getTest: () => test(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProjects);