import Search from '../../../components/search/Search';
import SongCard from '../../../components/music/SongCard';

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
					<div className="mb-10 flex items-center justify-start gap-1">
						<button className="btn-fls active">ALL</button>
						<button className="btn-fls">ALBUMS</button>
						<button className="btn-fls">PLAYLISTS</button>
						<button className="btn-fls">ARTISTS</button>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
						<SongCard />
						<SongCard />
						<SongCard />
						<SongCard />
						<SongCard />
						<SongCard />
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchPage;
