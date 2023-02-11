import { contractAddress } from "../const/yourDetails";

export default async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getContract(contractAddress,"nft-drop");
  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
