import React from "react";

// React-pdf components
import { View, StyleSheet } from "@react-pdf/renderer";
import PDFTableRow from "./pdfTableRow";
import PDFTableHeader from "./pdfTableHeader";

// Brand styling for table
const styles = StyleSheet.create({
	tableContainer: {
		marginLeft: "50px",
		marginRight: "50px",
		flexDirection: "row",
		flexWrap: "wrap",
		borderLeft: "1px solid #d8dbdd",
		borderRight: "1px solid #d8dbdd",
		borderTop: "1px solid #d8dbdd",
	},
});

// Creates table with header row and event rows
const PDFItemsTable = ({ data }) => (
	<View style={styles.tableContainer}>
		<PDFTableHeader />
		<PDFTableRow items={data} />
	</View>
);

export default PDFItemsTable;
