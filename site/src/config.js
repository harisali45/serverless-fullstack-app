/**
 * Global Config
 */

const config = {}

// Domains
config.domains = {}

var apiHost

/**
 * API Domain
 * Add the domain from your serverless express.js back-end here.
 * This will enable your front-end to communicate with your back-end.
 * (e.g. 'https://api.mydomain.com' or 'https://091jafsl10.execute-api.us-east-1.amazonaws.com')
 */
config.domains.api = process.env.API_HOST;
//config.domains.api = "https://46kio1trni.execute-api.us-east-1.amazonaws.com"

export default config