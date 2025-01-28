import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = "c6a1be761c524c085eea7ca722b022ac";

export const client = createThirdwebClient({
  clientId: clientId,
});
