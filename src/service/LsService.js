import React from "react";

const LsService = {
  setLS: function (value) {
    window.localStorage.setItem("LS", JSON.stringify(value));
  },
  getLS: function () {
    
    return JSON.parse(window.localStorage.getItem("LS"));
    
  },
};

export default LsService;
