import axios from "axios";

export default {
  // Saves a user to the database
  createUser: function(userData) {
    return axios.post("https://elitmus-server-cmbf.onrender.com/api/user/signup", userData);
  },

  checkUser: function(userData) {
    return axios.post("https://elitmus-server-cmbf.onrender.com/api/user/login", userData);
  },

  validateUser: function(userData) {
    return axios.get(`https://elitmus-server-cmbf.onrender.com/api/user/validate?secret_token=${userData}`)
  },

  logout: function(userData) {
    return axios.post("https://elitmus-server-cmbf.onrender.com/api/user/logout", userData);
  },

  solved: function(userId, puzzleTitle) {
    return axios.put("https://elitmus-server-cmbf.onrender.com/api/user/update/" + userId, puzzleTitle)
  },

  findAll: function() {
    return axios.get("https://elitmus-server-cmbf.onrender.com/api/user")
  }
};
