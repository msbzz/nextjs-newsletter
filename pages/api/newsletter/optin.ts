import {createClient} from "@supabase/supabase-js"
import { NextApiRequest, NextApiResponse } from "next";

// Supabase Setup
//===============
//const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_KEY= process.env.SUPABASE_SERVICE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const dbClient = createClient(SUPABASE_URL,SUPABASE_KEY);
//===============

const httpStatus ={
  Success:200,
  BadRequest:400,
  NotFound:404,
  InternalServerError:500
}

const controllerByMethod ={
  async POST(req:NextApiRequest,res:NextApiResponse){
    console.log(req.body.emailNewsletter)
    
    const email = req.body.emailNewsletter
    
    // fail fast validation
    if(!Boolean(email) || !email.includes('@')){

      //console.log('dentro da critica')

      res
      .status(httpStatus.BadRequest)
      .json({message:"voce precisa enviar um email valido ex:'teste@email.com"});
      return;
    }

    res
    .status(httpStatus.Success)
    .json({message:'Post request'})
  },

 async GET(req:NextApiRequest,res:NextApiResponse){

    const {data,error}= await dbClient.from("newsletter_users")
    .select("*")

    console.log('supabase data ==>> ',data )
    console.log('supabase erros ==>> ',error )

    res
    .status(httpStatus.Success)
    .json({
      message:'Get request',
      data:data
    })
  },

}

export default function handler(
    request:NextApiRequest,
  response:NextApiResponse
){
 const controller= controllerByMethod[request.method];
 if(!controller){
  response
  .status(httpStatus.NotFound) 
  .json({message:'Nada encontrado aqui :('})
  return;
 } 
 
 controller(request,response);
 
}

// export default function handler(
//   request:NextApiRequest,
//   response:NextApiResponse
// ){

//   // Servidor
//   // Request e Response
//   // Body e Headers
//   // Status Http (https://httpstatusdogs.com)
//   // Request methods

//   const responseBody = {name:'Mario Souto'}
//   response.status(httpStatus.Success).json({responseBody})
 
