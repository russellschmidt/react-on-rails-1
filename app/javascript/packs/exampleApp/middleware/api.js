// Private API
let post = (payload) => {
  return(payload + "!")
}

// Public API
const helloWorld = () => {
  let payload = 'Hello World'

  return post(payload);
}

// Export API
export const Api = {
  helloWorld
}