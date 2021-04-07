import { connect } from 'react-redux';
import { fetchBanner, fetchEditar, fetchDelete, fetchAddBanner,fetchIsActiveBanner } from '../../store/home'

import TemplateBanner from './bannerTemplate'


const mapStateToProps = (state) => {
	return {
		banner: state.banner.banner,
		loading: state.banner.loading,
		editar:state.banner.editar,
		deleteState: state.banner.delete,
		alertSuccess: state.banner.alertSuccess,
		addBannerState: state.banner.addBanner,
		active:state.banner.active,
		isActiveBanner: state.banner.isActiveBanner,
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchBanner: () => dispatch(fetchBanner()),
	fetchEditar: (id) => dispatch(fetchEditar(id)),
	fetchDelete: (deleteData) => dispatch(fetchDelete(deleteData)),
	fetchAddBanner: (datos) => dispatch(fetchAddBanner(datos)),
	fetchIsActiveBanner: (data) => dispatch(fetchIsActiveBanner(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateBanner)