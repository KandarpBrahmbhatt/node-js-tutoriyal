// import cookieParser from "cookie-parser";
import express from "express";
import bcrypt from "bcrypt";
const app = express();
//$2b$10$B25ShKT2LiKvkwuF2tVo9ObIMchxD8IqLJp.vAxwulcqXVDe3dElm
// polololoo
// app.use(cookieParser());

app.get("/", (req, resp) => {
  // salt random string hoy 6e.
  //   aa bcrypt random password mate use thay 6e.
  bcrypt.genSalt(10, function (err, salt) {
    console.log(salt);
    // bcrypt.hash("polololoo", salt, function (err, hash) {
    //   console.log(hash);
    // });

    // password sacho 6e ke khoto ae check karase. syntext
    // bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
    //   // result == true
    // });

    // uper synxt 6e mypaintexpassword ma je hoy ae and hash ma je new password genreate thayo hoy ae lakhavano 6e.
    bcrypt.compare(
      "polololoo",
      "$2b$10$B25ShKT2LiKvkwuF2tVo9ObIMchxD8IqLJp.vAxwulcqXVDe3dElm",
      function (err, result) {
        console.log(result);
      }
    );
  });
});

const port = 5000;
app.listen(port, () => {
  console.log("Server is started");
});
