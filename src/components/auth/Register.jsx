import { Link } from 'react-router-dom';
import { AUTH_BASE_ROUTES } from '../../routes/baseRoutes';

const Register = () => {
	return (
		<form className="p-2 md:p-5">
			<div className="grid grid-cols-1">
				<div className="form-group mb-3">
					<label htmlFor="name" className="col-form-label">
						Name
					</label>
					<input
						id="name"
						type="text"
						className="form-control"
						placeholder="Enter first name"
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="email" className="col-form-label">
						Email ID
					</label>
					<input
						id="email"
						type="email"
						className="form-control"
						placeholder="Enter email address"
					/>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
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
				<div className="form-group mb-3">
					<label htmlFor="confirmPassword" className="col-form-label">
						Confirm Password
					</label>
					<input
						id="confirmPassword"
						type="password"
						className="form-control"
						placeholder="Enter password again"
					/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-between md:items-center my-6">
				<div className="form-group mb-0 flex items-center">
					<input type="checkbox" className="form-checkbox" id="remember" />
					<label className="pl-3" htmlFor="remember">
						I agree to Terms and conditions
					</label>
				</div>
			</div>

			<div>
				<button type="submit" className="btn w-full">
					Register
				</button>
			</div>

			<p className="text-gray-800 mt-3 text-center">
				Already have account?
				<Link
					to={AUTH_BASE_ROUTES.LOGIN}
					className="text-theme font-bold ml-2 focus:text-theme transition duration-200 ease-in-out"
				>
					Sign in
				</Link>
			</p>
		</form>
	);
};

export default Register;
