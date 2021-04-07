import React from 'react';
import Navbar from '../../app/shared/Navbar';
import Sidebar from '../../app/shared/Sidebar';
import Footer from '../../app/shared/Footer';
function Layout({ history, Component, route, bodyClass, navbar, sidebar, footer }) {	
	console.log('navbar', navbar)
	console.log('sidebar', sidebar)
	console.log('footer', footer)
	return (
		<div className={`layout ${bodyClass ? bodyClass : null}`}>
			<div className="container-scroller">
				{ navbar && <Navbar/> }
				<div className="container-fluid page-body-wrapper">
					{ sidebar && <Sidebar/> }
					<div className="main-panel">
						<div className="content-wrapper">
						<Component route={route} />
						</div>
						{ footer && <Footer/> }
					</div>
				</div>
			</div>			
		</div>
	);
}

export default Layout;
