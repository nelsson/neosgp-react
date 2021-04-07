import { connect } from 'react-redux';
import { fetchRecetas } from '../../store/recetas'

import Recetas from './Receta'


const mapStateToProps = (state) => {
	return {
		recetas: state.recetasStore.recetas
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchRecetas: () => dispatch(fetchRecetas())
});

export default connect(mapStateToProps, mapDispatchToProps)(Recetas)