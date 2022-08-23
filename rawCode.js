// tour Controller before starting mongodb

// Node-core modules
// const fs = require('fs');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
// );

// exports.checkId = (req, res, next, val) => {
//   const requestedTourId = +req.url.slice(1);
//   const requestedTourId = +req.params.param;
//   if (requestedTourId > tours.length) {
//     return res.status(404).json({
//       status: 'Fail',
//       message: 'Invalid Tour Id',
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res
//       .status(400)
//       .json({ status: 'Fail', message: 'Missing name or price' });
//   }
//   next();
// };

// exports.getAllTours = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours,
//     },
//   });
// };

// exports.getTour = (req, res) => {
//   const requestedTourId = +req.params.id;
//   const requestedTour = tours.find(tour => +tour.id === +requestedTourId);
//   res.status(200).json({
//     status: 'success',
//     tour: {
//       requestedTour,
//     },
//   });
// };

// exports.createTour = (req, res) => {
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
//   const newTour = { id: newId, ...req.body };
//   tours.push(newTour);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     err => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };

// exports.updateTour = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     data: { tour: '<Updated Tour here...>' },
//   });
// };

// exports.deleteTour = (req, res) => {
//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Before Apifeatures class
//Node-core modules
// const fs = require('fs');

// //User-defined modules
// const Tour = require('./../models/tourModel');

// exports.aliasTopTours = async (req, res, next) => {
//   req.query.limit = '5';
//   req.query.sort = 'price,-ratingsAverage';
//   req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
//   console.log('middleware executed');
//   next();
//   // try {
//   //   const tours = await Tour.find()
//   //     .sort('price -ratingsAverage')
//   //     .select('name price ratingsAverage summary difficulty -_id  createdAt')
//   //     .limit(5);
//   //   res.status(200).json({
//   //     status: 'success',
//   //     data: {
//   //       tours,
//   //     },
//   //   });
//   // } catch (err) {
//   //   res.status(404).json({
//   //     status: 'fail',
//   //     message: err.message,
//   //   });
//   // }
// };

// exports.getAllTours = async (req, res) => {
//   try {
//     //1) Build query
//     const queryObj = { ...req.query };
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     excludedFields.forEach(el => delete queryObj[el]);

//     //2) Advanced filtering
//     const queryStr = JSON.stringify(queryObj);
//     //replace all gte, lte, gt, lt with $gte, $lte, $gt, $lt
//     const queryStrReplaced = queryStr.replace(
//       /\b(gte|gt|lte|lt)\b/g,
//       match => `$${match}`
//     );
//     const queryObjReplaced = JSON.parse(queryStrReplaced);

//     let query = Tour.find(queryObjReplaced, { price: 1 });

//     //3) Sorting queryObjReplaced
//     let sortBy = req.query.sort ? req.query.sort : '-createdAt';
//     if (req.query.sort) {
//       sortBy = sortBy.split(',').join(' ');
//       query = query.sort(sortBy);
//     } else {
//       query = query.sort(sortBy);
//     }

//     //4) Field limiting
//     if (req.query.fields) {
//       const fields = req.query.fields.split(',').join(' ');
//       query = query.select(`${fields} -_id`);
//     } else {
//       query = query.select('-__v');
//     }

//     // 5) Pagination
//     const page = req.query.page * 1 || 1;
//     const limit = req.query.limit * 1 || 100;
//     const skip = (page - 1) * limit;
//     query = query.skip(skip).limit(limit);

//     if (req.query.page) {
//       const numTours = await Tour.countDocuments();
//       if (skip >= numTours) {
//         throw new Error('This page does not exist');
//       }
//     }

//     //Execute query
//     const tours = await query;

//     //Send Response
//     res.status(200).json({
//       status: 'success',
//       results: tours.length,
//       data: {
//         tours,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

// exports.getTour = async (req, res) => {
//   try {
//     const requestedId = req.params.id;
//     const requestedTour = await Tour.findById(requestedId);
//     console.log(requestedId);
//     res.status(200).json({
//       status: 'success',
//       tour: {
//         requestedTour,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

// exports.createTour = async (req, res) => {
//   try {
//     const newTour = await Tour.create(req.body);
//     res.status(201).json({
//       status: 'success',
//       data: {
//         tour: newTour,
//       },
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: 'Invalid data sent!',
//     });
//   }
// };

// exports.updateTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true, runValidators: true }
//     );
//     res.status(200).json({
//       status: 'success',
//       data: { tour },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

// exports.deleteTour = async (req, res) => {
//   try {
//     await Tour.findByIdAndDelete(req.params.id);
//     res.status(204).json({
//       status: 'success',
//       data: null,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//Handling errors for undefined routes
// app.all('*', (req, res, next) => {
// res.status(404).json({
//   status: 'fail',
//   message: `Cant find ${req.originalUrl} on this server`,
// });
//Creating a custom error object
// const err = new Error(`Cant find ${req.originalUrl} on this server`);
// err.status = 'fail';
// err.statusCode = 404;
// next(err);
//   next(new appError(`Cant find ${req.originalUrl} on this server`, 404));
// });

//Global Error Handling Middleware
// app.use((err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || 'error';
//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message,
//   });
// });
