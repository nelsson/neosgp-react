import { connect } from 'react-redux';
import { fetchUser, fetchDeleteUser } from '../../store/users'

import usersComponent from './usersComponent'


const mapStateToProps = (state) => {
	return {
		users: state.userStore,
		deleteUsers: state.userStore.deleteUser,
		alertDelete: state.userStore.alertDelete
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchUser: () => dispatch(fetchUser()),
	fetchDeleteUser: (data) => dispatch(fetchDeleteUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(usersComponent)