// Code your solution in this file!
const hqStreet = 42;
const customerOne = 50;
const customerTwo = 47;
const customerThree = 43;
const ftToBlocks = 264;
const farePerFoot = 0.02;
const flatFare = 25;

function distanceFromHqInBlocks(customerStreet){
    const distance = Math.abs(hqStreet-customerStreet);
    console.log(distance);
    return distance;
};
distanceFromHqInBlocks(customerOne);

function distanceFromHqInFeet(customerStreet){
    return distanceFromHqInBlocks(customerStreet)*ftToBlocks;
};
distanceFromHqInFeet(customerOne);

function distanceTravelledInFeet(start, destination){
    return Math.abs((start-destination)*ftToBlocks);
};
distanceTravelledInFeet(customerTwo,hqStreet);

function calculatesFarePrice(start, destination){
    const distanceInFeet = Math.abs((start-destination)*ftToBlocks);
    console.log(distanceInFeet);
    if (distanceInFeet>2500){return `cannot travel that far`;};
    if (distanceInFeet >= 2000){return flatFare;};
    if (distanceInFeet < 2000 && distanceInFeet >400){return (distanceInFeet-400)*farePerFoot;};
    if (distanceInFeet<400){return 0};
};
calculatesFarePrice(customerThree,hqStreet);


