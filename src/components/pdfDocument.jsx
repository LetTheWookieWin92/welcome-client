import React from "react";
import { Document, Page, Text, StyleSheet, Image } from "@react-pdf/renderer";

import PDFItemsTable from "./pdfItemsTable";

//Images
import logo from "../images/Logo.jpeg";
import banner from "../images/Banner.png";

// Create styles
const styles = StyleSheet.create({
	page: {
		backgroundColor: "#FFFFFF",
	},
	title: {
		fontSize: 20,
		width: "100%",
		paddingLeft: "30px",
		paddingRight: "30px",
		textAlign: "center",
		marginBottom: "20px",
	},
	subtitle: {
		fontSize: 14,
		width: "100%",
		paddingLeft: "30px",
		paddingRight: "30px",
		textAlign: "center",
		marginBottom: "20px",
	},
	greyText: {
		fontSize: 9,
		paddingLeft: "30px",
		paddingRight: "30px",
		width: "100%",
		textAlign: "center",
		marginBottom: "30px",
		color: "grey",
	},
	text: {
		paddingLeft: "30px",
		paddingRight: "30px",
		fontSize: 10,
		width: "100%",
		textAlign: "left",
	},
	logo: {
		width: "150px",
	},
	banner: {
		marginBottom: "20px",
	},
});

// Create Document Component
const PdfDocument = (
	{ data } //
) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<Image src={logo} style={styles.logo} alt="Logo" />

			<Image src={banner} style={styles.banner} alt="Logo" />

			<Text style={styles.title}>Welcome to Sydney Law School</Text>
			<Text style={styles.greyText}>
				To all of our students - new and returning, on campus and overseas -
				welcome to Sydney Law School. Our campuses sit on the ancestral lands of
				Australia's First Peoples, where they have taught and learned for tens
				of thousands of years. As a community, we come together as one Sydney,
				but many peoples and continue the exchange of knowledge upon these lands
				proudly.
			</Text>
			<Text style={styles.subtitle}>Welcome Schedule</Text>

			<PDFItemsTable data={data} />
		</Page>
	</Document>
);

export default PdfDocument;
