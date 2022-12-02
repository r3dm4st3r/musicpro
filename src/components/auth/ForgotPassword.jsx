import { Link } from 'react-router-dom';
import { AUTH_BASE_ROUTES } from '../../routes/baseRoutes';

const ForgotPassword = () => {
	return (
		<form className="p-2 md:p-5">
			<div className="grid grid-cols-1">
				<div className="form-group mb-6">
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

				<div>
					<button
						type="submit"
						className="btn w-full"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
					>
						Reset Password
					</button>
				</div>
			</div>
			<Link
				to={AUTH_BASE_ROUTES.LOGIN}
				className="block text-center mt-5 text-black hover:text-theme transition duration-200 ease-in-out"
			>
				Back to Login
			</Link>
		</form>
	);
};

export default ForgotPassword;
