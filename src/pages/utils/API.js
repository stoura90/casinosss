import axios from 'axios'

export const API = {
  getAllPlayers: function () {
    return axios.get('/api/users')
  },
  getTopBlackJack: function () {
    return axios.get('/api/rankings/blackjack')
  },
  getTopCraps: function () {
    return axios.get('/api/rankings/craps')
  },
  getTopRoulette: function () {
    return axios.get('/api/rankings/roulette')
  },
  getTopSlots: function () {
    return axios.get('/api/rankings/slots')
  },
  getOnePlayer: function (email) {
    return axios.get(`/api/users/${email}`)
  },
  createPlayer: function (email) {
    return axios.post(`/api/users/`, email)
  },
  updatePlayer: function (email, obj) {
    return axios.put(`/api/users/${email}`, obj)
  },
  deletePlayer: function (email) {
    return axios.delete(`/api/users/${email}`)
  },
  getChatMessages: function () {
    return axios.get('/api/chats')
  },
  createChatMessage: function () {
    return axios.post('/api/chats')
  },
  deleteChatMessage: function (id) {
    return axios.delete(`/api/chats/${id}`)
  },
}
export default API
