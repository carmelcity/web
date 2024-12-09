export const simulatePostRequest = () => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      // Simulate a successful response
      resolve();
    }, 1000); // Simulate a 2-second delay
  });
};
