const devBaseURL = 'https://5b5e71c98e9f160014b88cc9.mockapi.io';
const proBaseURL = 'https://5b5e71c98e9f160014b88cc9.mockapi.io';


export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;



