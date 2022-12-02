import SongCard from '../../../components/music/SongCard';
import Greetings from '../../../components/common/Greetings';

const HomePage = () => {
	return (
		<>
			<section className="dark:text-light py-4">
				<div className="container">
					<div className="grid grid-cols-1">
						<div className="inline-block mb-5">
							<Greetings />
						</div>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
						<SongCard />
						<SongCard />
						<SongCard />
						<SongCard />
						<SongCard />
						<SongCard />
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
export default HomePage;
