"use strict";

const button = document.querySelector("button");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

import { API_KEY } from "./API_KEYS.js";



button.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.api-ninjas.com/v1/quotes", true);
  xhr.setRequestHeader("X-Api-Key", API_KEY);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {

        const JSONresponse = JSON.parse(xhr.responseText);
  
        quote.textContent = JSONresponse[0].quote;
        author.textContent="-"+JSONresponse[0].author;

      
      } else {
        console.error("Error:", xhr.status, xhr.responseText);
      }
    }
  };

  xhr.send();
  console.log(xhr.responseText);
});
