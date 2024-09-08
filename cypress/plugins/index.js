import dotenvPlugin from('cypress-dotenv');
export default  (on, config) => {
  config = dotenvPlugin(config)
  return config
}