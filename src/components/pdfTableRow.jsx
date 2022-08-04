import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Moment from "moment";

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#ffffff",
		borderBottom: "1px solid #d8dbdd",
	},
	date: {
		width: "20%",
		fontSize: 9,
		padding: 5,
	},
	name: {
		width: "60%",
		fontSize: 9,
		padding: 5,
	},
	presenter: {
		width: "20%",
		fontSize: 9,
		padding: 5,
	},
});

function formatDate(date) {
	return Moment(date).format("dddd D MMMM, h:mm a");
}

const PDFTableRow = ({ items }) => {
	const rows = items.map((item) => (
		<View style={styles.row} key={item.id.toString()}>
			<Text style={styles.date}>{formatDate(item.date)}</Text>
			<Text style={styles.name}>{item.name}</Text>
			<Text style={styles.presenter}>{item.presenter}</Text>
		</View>
	));
	return <Fragment>{rows}</Fragment>;
};

export default PDFTableRow;
