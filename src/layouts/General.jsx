import { Outlet } from 'react-router-dom';
import Header from '../components/common/general/Header';

const General = () => {
	return (
		<>
			<Header />
			<main role="main" aria-labelledby="general" className="general">
				<Outlet />
			</main>
		</>
	);
};

export default General;
