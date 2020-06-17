import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Search = ({ search, onSearch, onTermSubmit }) => {
	return (
		<View style={styles.container}>
			<Feather name="search" style={styles.icon} />
			<TextInput
				value={search}
				onEndEditing={onTermSubmit}
				onChangeText={onSearch}
				style={styles.input}
				placeholder="Search"
				autoCapitalize="none"
				autoCorrect={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#d1d1d1',
		height: 50,
		margin: 10,
		borderRadius: 5,
		flexDirection: 'row'
	},
	input: {
		flex: 1,
		fontSize: 18,
		color: '#555'
	},
	icon: {
		fontSize: 30,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default Search;
