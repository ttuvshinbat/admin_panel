export const allFood = async () => {
  return await fetch("http://52.221.185.255:3002/api/foods", {
    method: "GET",
    headeers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
};
export const getAllPic = async () => {
  return await fetch(
    "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com",
    {
      method: "GET",
      headers: {
        "Countent-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  );
};
export const foodService = {
  allFood,
};
