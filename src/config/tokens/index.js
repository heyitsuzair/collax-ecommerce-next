export const getConfig = {
  headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_READ_TOKEN,
  },
};
export const createConfig = {
  headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_CREATE_TOKEN,
  },
};
