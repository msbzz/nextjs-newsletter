import { createClient } from "@supabase/supabase-js";
import sendGridMail from "@sendgrid/mail"
import { NextApiRequest, NextApiResponse } from "next";

// Supabase Setup
//===============
//const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);
//===============

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
};

const controllerByMethod = {
  async POST(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body.emailNewsletter);

    const email = req.body.emailNewsletter;

    // fail fast validation
    if (!Boolean(email) || !email.includes("@")) {
      res
        .status(httpStatus.BadRequest)
        .json({
          message: "voce precisa enviar um email valido ex:'teste@email.com",
        });
      return;
    }

    // sanitize email
    // remove malicious code
    // remove x things

    // adiciona pessoa na newsletter
    const{ error } =await dbClient.from("newsletter_users").insert({email:email,optin:true});
     // if(error){}  desenvolver critica de erro
     // Cria usuario de fato no sistema
     await dbClient.auth.admin.createUser({email:email}) 
    
    //// envio de emai utilizando sendgrid.com 

     try {
    //   sendGridMail.setApiKey(process.env.SENDGRID_KEY)
    //   await sendGridMail.send({
    //     to:<email cadastrado no supabase> ,
    //     from: <seu email cadastrado no SENDGRID>,
    //     subject:"confirmação de cadastro",
    //     html:"Sua mensagem de boas vindas "
    //  })

      res.status(httpStatus.Success).json({ message: "Post request" });

     } catch (error) {
      res.status(httpStatus.InternalServerError).json({ message: "Não foi possivel enviar sua mensagem" });
     } 
  },

  async GET(req: NextApiRequest, res: NextApiResponse) {
    const { data, error } = await dbClient.from("newsletter_users").select("*");

    console.log("supabase data ==>> ", data);
    console.log("supabase erros ==>> ", error);

    res.status(httpStatus.Success).json({
      message: "Get request",
      data: data,
    });
  },
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const controller = controllerByMethod[request.method];
  if (!controller) {
    response
      .status(httpStatus.NotFound)
      .json({ message: "Nada encontrado aqui :(" });
    return;
  }

  controller(request, response);
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
