import { Icon } from '@iconify/react';

const Search = () => {
	return (
		<div className="form-group relative max-w-[650px] mx-auto">
			<span className="text-2xl absolute z-[1] top-[18px] left-3">
				<Icon icon="ion:search-outline" />
			</span>
			<input type="search" className="form-control pl-12 py-4" placeholder="Search music" />
		</div>
	);
};

export default Search;
