let quantity = 10; // 初期値

export const resolvers = {
  Query: {
    quantity: () => quantity,
  },
  Mutation: {
    updateQuantity: (_: any, { newQuantity }: { newQuantity: number }) => {
      quantity = newQuantity;
      return quantity;
    },
  },
};
