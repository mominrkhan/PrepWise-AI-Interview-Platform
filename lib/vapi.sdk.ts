import Vapi from "@vapi-ai/web";

const vapiToken = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;

if (!vapiToken) {
  console.error("NEXT_PUBLIC_VAPI_WEB_TOKEN is not defined");
}

export const vapi = new Vapi(vapiToken!);