/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let myTitle = document.querySelector("#titulo");
  myTitle.innerHTML = "Proyecto JS";

  let myParagraph = document.querySelector("#parrafo");
  myParagraph.innerHTML = "Domain name Generator";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = ["com", "net", "org", "us", "io"];

  let listItem = "";
  for (let element of pronoun) {
    for (let item of adj) {
      for (let option of noun) {
        for (let objet of dom) {
          listItem +=
            "<li class='list-group-item'>" +
            element +
            item +
            option +
            "." +
            objet +
            "</li>";
          console.log(element + item + option + "." + objet);
        }
      }
    }
  }

  let myList = document.querySelector("#lista");
  myList.innerHTML = listItem;
};
