// create new database...........
use("CRUD-DB")

db.createCollection("Courses")

// Insert Data........................
// db.Courses.insertOne({
//     "name": "Programminbg",
//     "Prices": 30000,
//     "assignments": 12,
//     "Projects": 20,
// })

// db.Courses.insertMany([
//     {
//         "name": "Web Development",
//         "Prices": 25000,
//         "assignments": 10,
//         "Projects": 15
//     },
//     {
//         "name": "Data Science",
//         "Prices": 35000,
//         "assignments": 14,
//         "Projects": 18
//     },
//     {
//         "name": "Machine Learning",
//         "Prices": 40000,
//         "assignments": 16,
//         "Projects": 22
//     },
//     {
//         "name": "Cyber Security",
//         "Prices": 28000,
//         "assignments": 8,
//         "Projects": 12
//     },
//     {
//         "name": "Mobile App Development",
//         "Prices": 32000,
//         "assignments": 11,
//         "Projects": 17
//     }

// ])


// Read Data........................
let a = db.Courses.find({ Prices: 35000 })
// console.log(a);

let b = db.Courses.findOne({ Prices: 35000 })
// console.log(b);


// Udate Data........................
db.Courses.updateOne({ Prices: 30000 }, { $set: { Prices: 35000 } })
db.Courses.updateMany({ Prices: 35000 }, { $set: { Prices: 500 } })


// Delete Data........................
db.console.deleteOne({ Prices: 40000 })
db.Courses.deleteMany({ Prices: 500 })