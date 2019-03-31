import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID a0634791b4d1d4c01bee2a53c6e00161584529a8824b37a48256219121593cfa'
  }
});
