// const express = require("express")
import express from "express"
import { eng, listLang, ru, ua } from "./language.js";

const app = express();

app.get("/listLang", (req, res) => {
  res.json(listLang);
});

app.get('/ua', (req, res)=> {
  res.json(ua);
})
app.get("/ru", (req, res) => {
  res.json(ru);
});
app.get("/eng", (req, res) => {
  res.json(eng);
});

app.listen(5000,(err)=> {
  if(err){
    return console.log(err);
  }

  console.log("Server OK");
})