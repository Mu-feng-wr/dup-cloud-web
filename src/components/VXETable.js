import Vue from 'vue'
import XEUtils from 'xe-utils'
import VxeUI from 'vxe-pc-ui'
import VXETable from 'vxe-table'

Vue.prototype.$vxe = XEUtils
Vue.prototype.$XModal = VXETable.modal

VXETable.formats.mixin({
  formatDate ({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd')
  },
  formatDateTime ({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
  },
  formatMoney ({ cellValue }, digits) {
    if (!XEUtils.isNumber(cellValue)) {
      cellValue = Number(cellValue)
    }
    return XEUtils.commafy(cellValue || 0, { digits: digits || digits == 0 ? digits : 2 })
  },
  formatMeter ({ cellValue }, digits) {
    if (!XEUtils.isNumber(cellValue)) {
      cellValue = Number(cellValue)
    }
    return XEUtils.commafy(cellValue || 0, { digits: digits || digits == 0 ? digits : 4 })
  }
})
VXETable.setConfig({
  table: {
    border: true,
    showOverflow: 'tooltip',
    autoResize: true,
    headerAlign: 'center',
    resizable: true,
    rowConfig: {
      isHover: true,
      isCurrent: true
    }
    // stripe: true
  },
  pager: {
    background: true,
    pagerCount: 7,
    pageSizes: [10, 20, 50, 100],
    layouts: ['Total', 'Sizes', 'PrevPage', 'Number', 'NextPage', 'FullJump']
  }
})
Vue.use(VxeUI)
Vue.use(VXETable)
