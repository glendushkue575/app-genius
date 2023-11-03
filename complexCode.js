// filename: complexCode.js

/* 
   This code is an example of a sophisticated and complex JavaScript application
   that demonstrates various advanced programming concepts and techniques.
   It simulates a virtual airline reservation system, including user authentication,
   flight booking, seat selection, and ticket generation.

   Note: This is a simplified and condensed version for demonstration purposes.
   The code will not run as it requires a backend server and database integration.
*/

// Global Variables
let flights = [];
let loggedInUser = null;

// Flight Class
class Flight {
  constructor(id, origin, destination, date, seats) {
    this.id = id;
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.seats = seats;
  }

  bookSeat() {
    if (this.seats > 0) {
      this.seats--;
      return true;
    } else {
      return false;
    }
  }
}

// User Class
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  login() {
    // Mock authentication logic
    if (this.username === "admin" && this.password === "admin123") {
      loggedInUser = this;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    loggedInUser = null;
  }
}

// Function to generate ticket
function generateTicket(flight, user) {
  return `
    ----------------------------------
          Airline Ticket
    ----------------------------------
    Origin: ${flight.origin}
    Destination: ${flight.destination}
    Date: ${flight.date}
    Passenger: ${user.username}
    Email: ${user.email}
    ----------------------------------
        Ticket Generated Successfully
    ----------------------------------
  `;
}

// Function to display flight details
function displayFlightDetails(flight) {
  console.log(`
    Flight Details:
    ID: ${flight.id}
    Origin: ${flight.origin}
    Destination: ${flight.destination}
    Date: ${flight.date}
    Available Seats: ${flight.seats}
  `);
}

// Main Program
function main() {
  // Create some flights
  const flight1 = new Flight(1, "New York", "London", "2022-01-01", 200);
  const flight2 = new Flight(2, "London", "Paris", "2022-02-02", 150);
  const flight3 = new Flight(3, "Tokyo", "Sydney", "2022-03-03", 100);

  // Add flights to the list
  flights.push(flight1, flight2, flight3);

  // User login
  const user1 = new User("admin", "admin123", "admin@example.com");
  if (user1.login()) {
    console.log(`User '${user1.username}' logged in successfully!`);
  } else {
    console.log("Login failed. Invalid credentials.");
    return;
  }

  // Display available flights
  console.log("Available Flights:");
  for (let flight of flights) {
    displayFlightDetails(flight);
  }

  // User books a seat
  const selectedFlight = flights[0];
  if (selectedFlight.bookSeat()) {
    console.log(`Seat booked successfully for Flight ${selectedFlight.id}`);
  } else {
    console.log("Booking failed. No available seats.");
    return;
  }

  // Generate ticket
  console.log(generateTicket(selectedFlight, user1));

  // User logs out
  user1.logout();

  console.log("User logged out successfully!");
}

// Execute main program
main();