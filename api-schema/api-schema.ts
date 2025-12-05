import { z } from "zod";

export const signupSchema = z.object({
  responseCode: z.number(),
  message: z.string(),
});


export const verifyLoginSchema = z.object({
  responseCode: z.number(),
  message: z.string(),
});