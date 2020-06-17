import React, { useState } from 'react';
import { View } from 'react-native';

import Search from '../component/Search';

const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<View>
			<Search
				search={searchTerm}
				onSearch={(newTerm) => setSearchTerm(newTerm)}
				onTermSubmit={() => console.log('term was submitted')}
			/>
		</View>
	);
};

export default Home;
