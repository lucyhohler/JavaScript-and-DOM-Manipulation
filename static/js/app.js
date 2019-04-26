// from data.js
var tableData = data;
// id="filter-btn"
// Variables
var button = d3.select("#filter-btn");
var inputDateTime = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");
var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
function populate(dataInput) {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
  // Prevents the page being reloaded
  d3.event.preventDefault();
  var dateTime = inputDateTime.property("value").trim();
  var city = inputCity.property("value").toLowerCase().trim();
  var state = inputState.property("value").toLowerCase().trim();
  var country = inputCountry.property("value").toLowerCase().trim();
  var shape = inputShape.property("value").toLowerCase().trim();

  var d = data;
  if (dateTime.length > 0) {
    d = d.filter(data => data.datetime === dateTime);
  }

  if (city.length > 0) {
    d = d.filter(data => data.city === city);
  }

  if (state.length > 0) {
    d = d.filter(data => data.state === state);
  }
  if (country.length > 0) {
    d = d.filter(data => data.country === country);
  }

  if (shape.length > 0) {
    d = d.filter(data => data.shape === shape);
  }
  // Clear contents
  tbody.html("");
  // If the array is empty, then show "No results found!"
  if (d.length > 0) {
    populate(d);
  } else {
    tbody.append("tr").append("td").text("No results found!");
  }

})

resetbtn.on("click", () => {
  tbody.html("");
  populate(data)
  console.log("Table reset")
})
