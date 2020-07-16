import axios from "axios";

export default {
  // Gets all books
  getTestimonies: function () {
    return axios.get("/api/testimonies");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/testimonies/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/testimonies/" + id);
  },
  // Saves a book to the database
  saveBook: function (testData) {
    return axios.post("/api/testimonies", testData);
  }
};
