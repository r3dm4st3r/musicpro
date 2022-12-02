import { Outlet } from 'react-router-dom';
import Player from '../components/player/Player';

const Master = () => {
	return (
		<main role="main" aria-labelledby="master">
			<Outlet />
			<Player />
		</main>
	);
};

export default Master;
