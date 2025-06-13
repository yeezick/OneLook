const style = {
  summaryCardContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "100px",
    marginLeft: "250px",
    marginRight: "20px",
  },
  summaryCard: {
    display: "flex",
    border: "2px solid",
    borderColor: "transparent",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.3s ease",
    "&:hover": {
      borderColor: "rgb(70, 70, 152)",
    },
  },
  date: {
    backgroundColor: "#E0E0FF",
    padding: "10px",
    textAlign: "center",
  },
  month: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  day: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  details: {
    flexGrow: 1,
    padding: "10px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  summary: {
    fontStyle: "italic",
  },
  tags: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px",
  },
  tag: {
    backgroundColor: "#F0F0F0",
    borderRadius: "5px",
    padding: "5px",
    margin: "2px 0",
    textAlign: "center",
  },
  headers: {
    fontWeight: "bold",
    lineHeight: "60px",
  },
  meetingNotesTopic: {
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default style;
