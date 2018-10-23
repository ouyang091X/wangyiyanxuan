import Vue from 'vue'

import {
  RECEIVE_CLASSIFYDATA,
  RECEIVE_HOMEDATA,
  RECEIVE_SHIWUDATA
} from './mutation-types'

export default {
  [RECEIVE_CLASSIFYDATA](state,{category_data}) {
    state.category_data = category_data
  },
  [RECEIVE_SHIWUDATA](state,{shiwu_data}) {
    state.shiwu_data = shiwu_data
  },
  [RECEIVE_HOMEDATA](state,{home_data}) {
    state.home_data = home_data
  },


}
