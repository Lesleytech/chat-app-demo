export function getLocalConfig() {
  return {
    API_EP: process.env.REACT_APP_API_EP as string,
  };
}
