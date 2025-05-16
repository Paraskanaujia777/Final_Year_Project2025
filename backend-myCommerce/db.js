const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost:27017/myCommerce');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connected to MongoDB');
});


const categorySchema = new mongoose.Schema({
  title: { type: String },
  product_link: { type: String },
  product_id: { type: String },
  source: { type: String },
  price: { type: String },
  rating: { type: Number },
  reviews: { type: String },
  delivery: { type: String },
  thumbnail: { type: String },
  searchQuery: { type: String }
})
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String , unique : true },
  password: { type: String }
})

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const categoryModel = mongoose.model('t1_category', categorySchema);
const userModel = mongoose.model('t2_users', userSchema);



// module.exports = db;
module.exports = {
  db,
  categoryModel,
  userModel
};
// module.exports = userModel;
// module.exports = prodHead;
// This snippet connects to the MongoDB database and exports the connection object.
// The connection object is then imported in the index.js file to start the server.



















// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';

// const GeminiSummary = ({ search }) => {
//   const [summary, setSummary] = useState('');
//   const [loading, setLoading] = useState(false);

//   const getSummary = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:4000/api/gemini-summary', {
//         title: search,
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setSummary(response.data.summary);
//     } catch (error) {
//       console.error("Error fetching Gemini summary", error.message);
//       setSummary("Could not fetch summary.");
//     }
//     setLoading(false);
//   };

//   const renderFormattedSummary = () => {
//     if (!summary) return null;

//     const sections = summary.split(/\n(?=\*\*|Pros|Cons|Predicted|Possible|Because|In Conclusion)/g).filter(sec => sec.trim());

//     return (
//       <div className="mt-4">
//         {sections.map((section, idx) => {
//           const titleMatch = section.match(/^\*\*(.+?)\*\*/);
//           const title = titleMatch ? titleMatch[1] : null;
//           const content = title ? section.replace(titleMatch[0], '').trim() : section.trim();

//           let icon = <FaInfoCircle className="text-secondary me-2" />;
//           if (/pros/i.test(title)) icon = <FaCheckCircle className="text-success me-2" />;
//           if (/cons/i.test(title)) icon = <FaTimesCircle className="text-danger me-2" />;

//           return (
//             <div key={idx} className="mb-4">
//               {title && <h6 className="d-flex align-items-center fw-bold">{icon}{title}</h6>}
//               <div className="ps-3">
//                 {content.split('\n').map((line, i) => (
//                   <p key={i} className="mb-1">{line.replace(/^[-•]/, '•')}</p>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className="p-4 border rounded shadow-sm bg-white my-3">
//       <h5 className="mb-3">{search}</h5>
//       <button
//         className="btn btn-primary"
//         onClick={getSummary}
//         disabled={loading}
//       >
//         {loading ? 'Loading Summary...' : 'Get Gemini Summary'}
//       </button>

//       {summary && (
//         <div className="mt-4 p-4 border rounded bg-light">
//           <h5 className="mb-3 text-primary">Gemini Summary</h5>
//           {renderFormattedSummary()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GeminiSummary;


