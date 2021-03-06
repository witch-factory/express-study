import {getFortune} from "./fortune.js";

const handlers={
  home:(req, res)=>res.render('home'),
  about:(req,res)=>res.render('about', {fortune:getFortune()}),
  notFound:(req, res)=>res.render('404'),
  serverError:(err,req,res,next)=>{
    console.log(err)
    res.render('500')
  }
}

export default handlers;