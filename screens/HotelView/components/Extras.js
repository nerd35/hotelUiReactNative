import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { gs, colors } from '../../../styles';

export default function Extrax() {
	const extras = [
		'Payment at Checkout',
		'WI_FI Network is off by 12:00am',
		'No Swimming after 10:00pm',
		'No more than two 2 bags of luggage',
		'No singing while showering',
		'No Refunds'
	];
	return (
		<View style={styles.container}>
			<Text style={gs.sectionTitle}>Before you go</Text>

			<View style={styles.list}>
				{extras.map((extra, key) => {
					return (
						<Text style={styles.listItem} key={key}>
							&mdash; {extra}
						</Text>
					);
				})}
			</View>
			<View style={{ marginTop: 32, marginBottom: -45 }}>
				<TouchableOpacity style={styles.filterButton}>
					<Text style={{ fontWeight: '700', color: '#fff' }}>Filter</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...gs.sectionContainer,
		marginTop: 8,
		marginBottom: 64
	},
	list: {
		marginTop: 16,
		marginLeft: 8
	},
	listItem: {
		color: colors.textSec,
		marginVertical: 8
	},
	filterButton: {
		...gs.button,
		paddingVertical: 16
	}
});
