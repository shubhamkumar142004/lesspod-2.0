import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields'
export const state = () => ({
  pages: [
    { _id: '1', title: 'Home', menuName: 'Home', content: '', author: ''},
    { _id: '2', title: 'Features', menuName: 'Features', content: '', author: ''},
    { _id: '3', title: 'Pricing', menuName: 'Pricing', content: 'This is a pricing page.', author: ''},
    { _id: '4', title: 'Key Features', menuName: 'Key Features', content: '', author: ''},
    { _id: '5', title: 'All Features', menuName: 'All Features', content: '', author: ''}
  ]
})

export const getters = {
  getField
}

export const mutations = {
  add(state, page) {
    state.pages.push(page)
  },
  remove(state, page) {
    state.pages.splice(state.pages.indexOf(page), 1)
  },
  updateField
  // update(state, page) {
  //   state.page = page
  // }
}

export const actions = {
  async DELETE_PAGE({ commit }, page) {
    // const { result } = await axios.delete(process.env.baseUrl + '/api/page/' + page._id)
    // console.log('page deleted...' + result)
    commit('remove', page)
  }
}
