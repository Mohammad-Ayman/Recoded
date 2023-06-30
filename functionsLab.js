function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const blocksTravelled = Math.abs(endBlock - startBlock);
  const feetPerBlock = 264;
  return blocksTravelled * feetPerBlock;
}

const pickupLocation = 50;
const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
const distanceInFeet = distanceFromHqInFeet(pickupLocation);

console.log(`Distance in blocks: ${distanceInBlocks}`);
console.log(`Distance in feet: ${distanceInFeet}`);

const startBlock = 34;
const endBlock = 38;
const travelledInFeet = distanceTravelledInFeet(startBlock, endBlock);

console.log(`Distance travelled in feet: ${travelledInFeet}`);
