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
		width: "30%",
		fontSize: 9,
		padding: 5,
	},
	warningDate: {
		width: "30%",
		fontSize: 9,
		padding: 5,
		color: "#e34331",
	},
	name: {
		width: "50%",
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
	return Moment(date).format("ddd D MMMM, h:mm");
}

const PDFTableRow = ({ items }) => {
	const rows = items.map((item) => (
		<View style={styles.row} key={item.id.toString()}>
			{item.clashing ? (
				<Text style={styles.warningDate}>
					{formatDate(item.date)} - {Moment(item.endTime).format("h:mm a")}
					{"\n"}
					(Event clashes)
				</Text>
			) : (
				<Text style={styles.date}>
					{formatDate(item.date)} - {Moment(item.endTime).format("h:mm a")}
				</Text>
			)}
			<Text style={styles.name}>{item.name}</Text>
			<Text style={styles.presenter}>{item.presenter}</Text>
		</View>
	));
	return <Fragment>{rows}</Fragment>;
};

export default PDFTableRow;
