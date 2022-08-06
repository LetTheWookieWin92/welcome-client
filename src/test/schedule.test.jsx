const { schedule } = require("../components/schedule");

// Test if end time of event is correctly calculated
describe("getEventEndTime", () => {
	it("takes an event start time and duration and outputs the end time", () => {
		expect(getEventEndTime("2022-06-14T01:00:00.000Z", 60)).toBe(
			"2022-06-14T02:00:00.000Z"
		);
	});
});

// Test if events are correctly ordered chronologiically
describe("sortEvents", () => {
	it("takes an array of events and returns a sorted array", () => {
		expect(
			sortEvents([
				{
					id: 2,
					location: "Law Foyer",
					name: "Welcome Lunch for Law Students",
					clashing: false,
					compulsory: false,
					date: "2022-06-14T02:00:00.000Z",
					description: "Some description",
					duration: 120,
					presenter: "Geoff Reid",
				},
				{
					id: 1,
					location: "Law Foyer",
					name: "Welcome Lunch for Law Students",
					clashing: false,
					compulsory: false,
					date: "2022-06-14T01:00:00.000Z",
					description: "Some description",
					duration: 120,
					presenter: "Geoff Reid",
				},
			])
		).toBe([
			{
				id: 1,
				location: "Law Foyer",
				name: "Welcome Lunch for Law Students",
				clashing: false,
				compulsory: false,
				date: "2022-06-14T01:00:00.000Z",
				description: "Some description",
				duration: 120,
				presenter: "Geoff Reid",
			},
			{
				id: 2,
				location: "Law Foyer",
				name: "Welcome Lunch for Law Students",
				clashing: false,
				compulsory: false,
				date: "2022-06-14T02:00:00.000Z",
				description: "Some description",
				duration: 120,
				presenter: "Geoff Reid",
			},
		]);
	});
});
