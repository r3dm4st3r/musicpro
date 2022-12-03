import Header from '../common/general/Header';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div role="main" aria-labelledby="notFound" className="min-h-[calc(100vh-72px)]">
			<Header />
			<div className="min-h-[calc(100vh-135px)] flex items-center justify-center text-center">
				<div className="container">
					<div className="grid grid-cols-1">
						<div className="dark:text-light">
							<div className="text-7xl flex items-center justify-center mb-5">
								<Icon icon="fluent-emoji:worried-face" />
							</div>
							<h1>Opps! I din't find anything...</h1>
							<div className="mt-8">
								<button className="btn" onClick={() => navigate(-1)}>
									Go Back
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default NotFound;
