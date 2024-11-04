import { NextApiRequest, NextApiResponse } from "next";

const httpStatus ={
  Success:200,
  BadRequest:400,
  InternalServerError:500
}

export default function handler(
  request:NextApiRequest,
  response:NextApiResponse
){

  // Servidor
  // Request e Response
  // Body e Headers
  // Status Http (https://httpstatusdogs.com)
  // Request methods

  const responseBody = {name:'Mario Souto'}
  response.status(httpStatus.Success).json({responseBody})
}
