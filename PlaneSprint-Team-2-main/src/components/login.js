// import { useState } from "react";
// import img from "../assets/logbg.svg";
// import image from "../assets/bg.svg";
// import mail from "../assets/mail.svg";
// import lock from "../assets/Lock.svg";
// import g from "../assets/g.svg";
// import m from "../assets/m.svg";
// import s from "../assets/s.svg";
// import {NavLink} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


// export default function Login(){

// }

// return (
    
// )

// export default function Signup() {
//   const [data, setData] = useState({});
//   let auth = getAuth(app);
//   const provider = new GoogleAuthProvider();

//   const navigate = useNavigate();
//   const signinwithgoogle = async () => {
//     const result = await signInWithPopup(auth, provider);
//     console.log(result);
//     navigate('/')
//   };

//   const handleInput = (event) => {
//     let newInput = { [event.target.name]: event.target.value };
//     setData({ ...data, ...newInput });
//   };

//   const handleSubmit = () => {
//     if(data.password === data.c_password){
//         createUserWithEmailAndPassword(auth, data.username, data.password)
//         .then(() =>{
//             alert('user created')
//             setData({})
//             navigate('/')
//         })
//         .catch(() => {
//             alert('not created ,please re-try')
//     });
//     }
//     else{
//         alert("passwords don't match")
//     }
// };
//   return (
//     <>
//       <div className="bg w-full h-full absolute z-0 flex flex-col justify-center items-center space-y-8" style={{
//                 backgroundImage: `url(${image})`,
//                 }}>
//         <NavLink to="/"><img src={img} alt="" /></NavLink>
//         <div className="bg-white p-16 z-10 w-2/3 h-2/3 rounded-2xl flex-row flex">
//             <div className="left w-3/4 flex flex-col space-y-4">
//                 <div className="space-y-2">
//                     <h2 className="text-xl font-medium">Email</h2>
//                     <div className="flex space-x-4 w-3/4 px-4 rounded-md border-[#F5F6FB] border-2">
//                         <img src={mail} alt="" className='w-4'/>
//                         <input className="text-sm focus:border-transparent outiline-none py-4" name="username" placeholder="Enter your Email" onChange={(event) => handleInput(event)}/>
//                     </div>
//                 </div>
//                 <div className="space-y-2">
//                     <h2 className="text-xl font-medium">Password</h2>
//                     <div className="flex space-x-4 w-3/4 px-4 rounded-md border-[#F5F6FB] border-2">
//                         <img src={lock} alt="" className='w-4'/>
//                         <input className="text-sm focus:border-transparent outiline-none py-4" name="password" placeholder="Password" onChange={(event) => handleInput(event)}/>                        
//                     </div>
//                 </div>
//                 <div className="space-y-2">
//                     <h2 className="text-xl font-medium">Confirm Password</h2>
//                     <div className="flex space-x-4 w-3/4 px-4 rounded-md border-[#F5F6FB] border-2">
//                         <img src={lock} alt="" className='w-4'/>
//                         <input className="text-sm focus:border-transparent outiline-none py-4" name="c_password" placeholder="Confirm password" onChange={(event) => handleInput(event)}/>
//                     </div>
//                 </div>
//                 <div className="mid flex space-x-2">
//                   <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/><span className="text-sm">Keep me logged in</span>
//                 </div>
//                 <div>
//                 <button className="bg-[#F48A00] py-3 px-6 text-white font-semibold rounded-lg w-3/4" onClick={() => handleSubmit()}>Register</button>
//                 </div>
//                 {/* <div className="flex space-x-2 justify-center w-3/4">
//                   Already have an account? <span className="text-[#F48A00]"> Log In</span>
//                 </div> */}
//                 {/* <button name="username" onClick={signinwithgoogle}> Google Button </button> */}
//             </div>
//         <div className="right w-1/4 border-l-2 p-12 ">
//             <div className="flex flex-col space-y-8 justify-center translate-x-1/4 translate-y-1/4">
//               <button onClick= {signinwithgoogle} name="username" className="flex px-10 py-2 border rounded-md justify-center items-center cursor-pointer"><img src={g} alt="" /></button>
//               <div className="flex px-10 py-2 border rounded-md justify-center items-center cursor-pointer"><img src={m} alt="" /></div>
//               <div className="flex px-10 py-2 border rounded-md justify-center items-center cursor-pointer"><img src={s} alt="" /></div>
//             </div>
//         </div>

//         </div>
//       </div>
//     </>
//   );
// }

