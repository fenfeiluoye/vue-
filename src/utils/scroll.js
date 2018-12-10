import { Toast } from 'mint-ui'
import BScroll from 'better-scroll'
import http from 'utils/http'
import _ from 'lodash'

export const scroll = ({
  el,
//   data,
//   url,
//   vm,
//   paging = {},
horizontal=false
}) => {

  // 声明BScroll
  let bscroll = new BScroll(el, {
    click:true,
    scrollX: horizontal,
    probeType: 1,
    // pullUpLoad: {
    //   threshold: 50
    // }
  })

}