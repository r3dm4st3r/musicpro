import Search from '../../components/search/Search';
import HomeSongCard from '../../components/music/home/HomeSongCard';

const SearchPage = () => {
	return (
		<>
			<section className="dark:text-light py-5">
				<div className="container">
					<div className="grid grid-cols-1 mb-10">
						<div>
							<div className="text-center mb-10">
								<img
									className="max-w-[200px] mx-auto"
									src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt3b753422a8fd8667/62a00b97e95fa50f854de137/enterprise-search-landing-hero.png"
									alt="Search"
								/>
							</div>
							<Search />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchPage;
