import { StyleSheet } from 'react-native';

export const colors = {
	darkBg: '#222',
	lightBg: '#333',
	darkHl: '#666',
	lightHl: '#888',
	pink: '#ea3372',
	text: '#fff',
	textSec: '#aaa'
};

export const gs = StyleSheet.create({
	sectionContainer: {
		paddingVertical: 24,
		paddingHorizontal: 32,
		marginBottom: 8,
		backgroundColor: colors.lightBg
	},
	amContainer: {
		paddingVertical: 24,
		paddingHorizontal: 21,
		marginBottom: 8,
		backgroundColor: colors.lightBg
	},
	rowCenter: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	rowBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	divider: {
		borderBottomColor: '#444',
		borderBottomWidth: 1,
		marginVertical: 24
	},
	title: {
		color: colors.text,
		fontSize: 30
	},
	smallText: {
		fontSize: 12,
		fontWeight: '800',
		color: colors.text
	},
	sectionTitle: {
		fontWeight: '700',
		color: colors.text,
		fontSize: 15
	},
	absoluteFull: {
		position: 'absolute',
		top: 20,
		left: 20,
		width: '100%',
		height: '100%'
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.pink,
		borderRadius: 100
	}
});
