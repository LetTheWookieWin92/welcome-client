import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f1f2f2",
		height: "30px",
		textAlign: "left",
		borderBottom: "1px solid #d8dbdd",
		flexGrow: 1,
	},
	dateHeader: {
		fontSize: 9,
		width: "20%",
		padding: 5,
		fontStyle: "bold",
	},
	nameHeader: {
		fontSize: 9,
		width: "60%",
		padding: 5,
	},
	presenterHeader: {
		fontSize: 9,
		width: "20%",
		padding: 5,
	},
});

const PDFTableHeader = () => (
	<View style={styles.row}>
		<Text style={styles.dateHeader}>Date/Time</Text>
		<Text style={styles.nameHeader}>Name</Text>
		<Text style={styles.presenterHeader}>Presenter</Text>
	</View>
);

export default PDFTableHeader;
