import cookieParser from "cookie-parser";
import express from "express";
import createError  from "http-errors";
import logger   from   "morgan";
import path from   "path";

const app = express();
const port = 3080; // default port to listen

// Configure Express to use PUG
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
	res.render( "index", { 
		title: "Typescript in Express",
		page: "1. Rework architecture; 2. Implement MongoDB " } );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
