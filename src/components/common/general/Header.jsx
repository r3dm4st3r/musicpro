import Logo from '../logo/Logo';
import { GENERAL_ROUTES } from '../../../routes/routes';
import { NavLink } from 'react-router-dom';
import ToggleTheme from '../../app/theme/ToggleTheme';

const Header = () => {
	return (
		<header className="bg-white dark:bg-darkOne shadow drop-shadow-md py-3 sticky top-0 left-0 right-0 z-10">
			<div className="container-fluid">
				<nav className="flex items-center justify-between">
					<div className="flex items-center">
						<Logo width={35} />
					</div>
					<div className="items-center justify-end hidden sm:flex">
						<ul className="flex items-center justify-end gap-10">
							{GENERAL_ROUTES.map((routeItem, routeIndex) => {
								return (
									<li
										key={routeIndex}
										className="inline-flex items-center justify-center"
									>
										<NavLink end to={routeItem.path} className="nav-icon">
											{routeItem.icon}
										</NavLink>
									</li>
								);
							})}
							<li className="inline-flex items-center justify-center ml-5">
								<ToggleTheme />
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};
export default Header;
