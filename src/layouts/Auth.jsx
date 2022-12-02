import { Outlet } from 'react-router-dom';
import Logo from '../components/common/logo/Logo';

const Auth = () => {
	return (
		<section className="min-h-screen py-10 w-full flex items-center justify-center relative">
			<div className="container">
				<main role="main" aria-labelledby="authorization">
					<div className="flex items-center justify-center mb-5">
						<Logo />
					</div>
					<div className="w-full max-w-[550px] mx-auto rounded bg-white p-5 shadow-sm drop-shadow-md">
						<Outlet />
					</div>
				</main>
			</div>
		</section>
	);
};

export default Auth;
