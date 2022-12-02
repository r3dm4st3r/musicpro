import { Link } from 'react-router-dom';
import { AUTH_BASE_ROUTES } from '../../routes/baseRoutes';

const Login = () => {
	return (
		<form className="p-2 md:p-5">
			<div className="grid grid-cols-1">
				<div className="form-group mb-3">
					<label htmlFor="email" className="col-form-label">
						Email address
					</label>
					<input
						id="email"
						type="email"
						className="form-control"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="password" className="col-form-label">
						Password
					</label>
					<input
						id="password"
						type="password"
						className="form-control"
						placeholder="Enter password"
					/>
				</div>

				<div className="flex flex-col md:flex-row justify-between md:items-center my-6">
					<div className="form-group mb-0 flex items-center">
						<input type="checkbox" className="form-checkbox" id="remember" />
						<label className="pl-3" htmlFor="remember">
							Remember me
						</label>
					</div>
				</div>

				<div>
					<button type="submit" className="btn w-full">
						Login
					</button>
				</div>
			</div>
			<Link
				to={AUTH_BASE_ROUTES.FORGOT_PASSWORD}
				className="block text-center mt-5 text-black hover:text-theme transition duration-200 ease-in-out"
			>
				Forgot password?
			</Link>
			<p className="text-gray-800 mt-3 text-center">
				Not a member?
				<Link
					to={AUTH_BASE_ROUTES.REGISTER}
					className="text-theme font-bold ml-2 focus:text-theme transition duration-200 ease-in-out"
				>
					Register
				</Link>
			</p>
		</form>
	);
};

export default Login;
