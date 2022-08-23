////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------NODE.JS (NOTES)-------------------------------------------

//<<----------Section-2(Introduction to Node.js and NPM)----------->>

//KeyPoints:
//what is Node.js?,why we use it?, and why Node.js is better than other technologies?
//Node.js is simply a javascript runtime outside of browser and it uses Googles V8 engine(parse and execute js code).
//unlike browser, using Node.js we can do things like accessing file system or better network capabilities, and we can use js on sever-side of web development.
//Node.js allows us to use single programming language(js) in front-end and back-end which makes webdevelopment more efficient.
//Node.js should not be used when we have heavy server-side processing.
//Huge library (npm) available for Node.js which is both a repository and a software(command line).
//npm is a command line interface app that automatically comes included in Node.js which is used to install and manage open source packages(third party libraries).
//We can build Api with database behind it(preferably NoSql).
//hitting tab key in repl gives all the global variables available in Node.
//underscore in repl gives the previous value.
//Hitting tab key on any globalvariable(String.) gives the methods available on it.
//to run any js file use (node index.js).
//require('fs') returns an object which have further methods(allows us to read and write the files).
//applications in Node.js runs in single thread, so we use asynchronous code which is non-blocking and runs the application in the background.
//Node.js uses a lot of callback fns asynchronously but all callback fns are not executed asynchronously, to get rid of the callback hell we use ES6(promises) or ES8(async,await).
//thread is a set of instructions which executes in cpu.
//http module gives us networking capabilities such as building a http server.
//Routing means implementing different actions for different urls.
//Routing becomes complicated in big projects, so we use tool called express to make it simple.
//To analyse the url we use url module.
//url module help us to parse the parameters and values into a nicely-formatted object.
//Http header is a piece of information about the response we are sending back.
//All Node.js scripts get access to a variable called dirName and this variable translates to the directory in which scripts are located.
//__dirname in importing our own modules is an expection which gives the actual current directory(so use ./).
//module is an object.
//npm init command on commmand line creates a package.json file which is a configuration file for our whole project.
//Express framework is a dependency.
//slogify is a simple tool which makes urls more readable.
//dev dependencies are just tools for development.
//nodemon is a dev dependency that helps us node.js applications by automatically restarting node files.
//types of packages(regular dependencies and development dependencies) and types of installs(locally and globally).

//KeyWords:
//node,repl(read-eval print loop),.exit(ctrl + d),fs(file system module).
//Synchronous,asynchronous,blocking,non-blocking,I/O,thread.
//http module,url module.
//createServer(),end(),listen(),port number,host.
//writeHead(),query string.
//placeHolders.
//exports.
//npm init.
//simple dependencies/ regular dependencies, development dependencies (types of packages).
//slogify (reg dep),nodemon(dev dep).
//npm i slogify,npm i nodemon --save-dev.
//nodemon index.js(if it is global).
//npm run start/npm start(if it is local).
//major version (huge changes),minor version (new features), patch version(bug fixes).
//npm outdated, npm i slugify@1.0.0,npm update slugify,^(accept minor and patch), ~(accept only patch),*(automatically updated all new releases).
//npm install (we get back our all node modules in package.json file which were deleted).
//npm uninstall express/npm un express.
//templating.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-3 (Introduction to backend web development)----------->>

//KeyPoints:
//How web works?
//Front end vs Backend.
//In backend, web server stores files and runs http server which is capable of understanding the urls, requests and delivering responses.
//dynamic websites + functionality/web applications are server-side rendered and Api powered websites are client-side rendered.
//Using Node.js we can build both dynamic websites and Api powered websites.
//The Apis build with Node.js are consumed not only by the browser, the possibilities are really endless.

//KeyWords:
//simple/static websites and dynamic websites/web application.
//server-side rendering,client-side rendering.
//Api powered websites (building Api and consuming Api).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-4 (How Node.js works behind the scenes)----------->>

//KeyPoints:
//Node architectures has several dependencies(v8 js engine and libuv(open source library)....).
//libuv is open source library with strong focus on asynchronous IO.
//libuv gives node access to operating system,file system, Networking and more.
//libuv also implements important features of Node which are event loop and thread pool.
//event loop is responsible for executing callbacks, networking IO.
//thread pool is responsible for files access, and so on...
//while using Node on any computer there is a node process(program in execution) is running on the computer.
//in Node we actually have access to a process variable and in that process node.js runs in a single thread.
//event loop is where our non-top level code in our application will run.
//when asynchronous code like(new http request,file reading,expired timer..) emits events into the event loop, then event loop will execute the callback functions associated with them.
//Listening to http server requests and reading/writing  a file are i/o tasks.
//some tasks running in the event loop can block the event loop, so those events will be offloaded to thread pool.
//Event loop also runs in the single thread of node process.
//event loop is heart of the node architecture and it is responsible for executing asynchronous code and managing callbacks in phases and offloading heavy tasks to thread pool.
//Never block the event loop follow few guidelines, we can also manually offload heavy tasks to thread pool or child processes.
// when an event hits it,event emitter emits the event to the event listener and event listener reacts to named event by calling call back function attached to it.(event driven architecture).
//server is an instance of node.js event emitter class.
//server doesnt close down because event loop is still waiting for i/o tasks to complete.
//exports actually gives an object with the following properties.

//KeyWords:
//Node Architecture/ Node runtime.
//libuv.
//event loop, thread pool.
//Event-driven architecture.
//tick.
//observer pattern/event emitter logic.
//events module.
//streams
//data,end,pipe(),read().
//drain,finish,write(),end().
//arguments.
//module.exports,exports.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-6 (Express) ----------->>

//KeyPoints:
//rest architecture is a way of building apis in a logical manner.
//middleware is just a function that can modify the incoming request data.
//middleware adds the data of the request body to the request object.
//SET NODE_ENV=development&&nodemon server.js
//npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev

//KeyWords:
//MVC architecture.
//postman
//get(),post(),send(),json(),status().
//REST architecture.(representational state transfer).
//enveloping,route handler,file-based Api.
//app.use(express.json());
//201(created  in server).
//req.params
//CRUD(create,read,update and delete).
//204(deleting)
//middleware stack.
//core middlewares, user middlewares, 3rd party middlewares.
//morgan(logging middleware)
//500(internal server error)
//handlers/controllers
//mounting
//param middleware

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-7 Introduction to Mongodb----------->>

//KeyPoints:
//Mongodb is a NoSQL database.

//KeyWords:
//Relational dataBase.
//collections,documents.
//database server,database shell.
//use (to create a database or switch to a database).
//db.tours.insertMany([]) (to create multiple documents in a collection in current database)
//insertOne(js object)
//db.tours.find()
//show dbs
//show collections
//create documents, query documents,update documents, delete documents.
//quit()(quitting the mongo shell)
//CRUD
//db.tours.find({price: {$lte: 500}})
//db.tours.find({price: {$lte: 500}, rating: {$lte: 4.8}})
//db.tours.find({ $or: [{price: {$gt: 500}}, {rating: {$gte: 4.8}}]}, {name: 1})
//db.tours.updateOne({name: "The Snow Adventurer"},{$set: {price: 597}}),db.tours.updateMany()
//replaceOne(),replaceMany()
//deleteOne(),deleteMany(),db.tours.deleteMany({})(deletes all documents in the collection)
//remote database, local database

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-8 Using mongodb with mongoose----------->>

//KeyPoints:
//mongodb driver is a software which allows our node code to access and interact with mongodb db.
//mongoose is a level of abstraction over the mongodb driver.
//find() method returns a query
//we can chain methods on the query if we dont use await.
//we can manipulate the data using aggregation pipeline and we can manage to ge all kinds of insights as our requirement.
//Tour.aggregate() gonna return an aggregate object.
//we can have middlewares running before and after an event.
//in case of document middleware the event is usually save hook.
//on strings in schema match validator checks whether string matches the given regular expression.
//this keyword in validator function points to current document only while creating new documents but not while updating documents.

//KeyWords:
//Schema,model
//process.argv
//process.exit()
//Filtering
//query string
//req.query
//Tour.find().where().
//sort(for sorting functionality)
//page(for pagination)
//Field limitingclass APIFeatures
//projecting(selectiong specific fields)
//Aliasing
//Mongodb aggregation pipeline
//virtual properties (data model features)
//document middleware
//pre and post hooks(mongoose middleware)
//document,query, aggregate and model middleware.
//validation,sanitization
//fat model, thin controller
//custom validators
//validator (third party validation plugin)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-9 (Error Handling with Express)----------->>

//KeyPoints:
//Will be using robust error handling workflow using Express and Environment variables.
//when there is an error argument in next() in any of the middlewares , then express application directly jumps into Global error handling middleware.

//KeyWords:
//step over next fn call (F10)
//step into next fn call (F11)
//step out current fn call (shift + F11)
//step (F9)
//operational errors, programming errors.
//error handling middleware.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-10 (Authonication, Authorization and security)----------->>

//KeyPoints:
//To implement authentication we use a modern technique called JSON web Tokens.
//Instance method is available in all documents of a certain collection.
//we send a token in request header called Authentication with string "Bearer Token".
//util node module is used to promisify the functions.
//Data sanitization means cleaning all the malicious data that comes into our Application.
//Nosql injection (we can directly get the jwt token using the below req body)
// {
//     "email": {"$gt": ""},
//     "password": "rehaman20"
// }

//KeyWords:

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-11----------->>

//KeyPoints:

//KeyWords:

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-12----------->>

//KeyPoints:

//KeyWords:

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-13----------->>

//KeyPoints:

//KeyWords:

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
//<<----------Section-14----------->>

//KeyPoints:

//KeyWords:

//Git and GitHub
//git init,git remote add origin ""
//git status
//git add
//git commit -m ""
//git add -A
//git commit -a -m ""
//git log
//git branch firstbranch
//git checkout firstbranch
//ls
//db.dropDatabase()

//Mongodb db with embedded databases
// db.products.insertOne({
//   _id: 1,
//   name: 'Pen',
//   price: 1.2,
//   stock: 32,
//   reviews: [
//     {
//       author: 'ramesh',
//       rating: 5,
//       review: 'Awesome pen!',
//     },
//     {
//       author: 'suresh',
//       rating: 5,
//       review: 'Great pen!',
//     },
//   ],
// });
