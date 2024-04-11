import router from '@/router/index.js'

export function routerLink(params) {
  if (window.$wujie) {
    window.$wujie.props.route(params)
  } else {
    router.push({
      path: params.fullPath,
      query: params.condition
    })
  }
}

export function closePage(params) {
  if (window.$wujie) {
    window.$wujie.props.closeCurrentPage({ path: params.path })
  } else {
    router.back()
  }
}
