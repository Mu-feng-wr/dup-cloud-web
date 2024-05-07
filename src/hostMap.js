const origin = `${window.location.protocol}//${window.location.hostname}`
const map = {
  [origin + ':19012/#']: `${origin}:31300/bspweb/#`
}

export default function hostMap(host) {
  if (process.env.NODE_ENV === 'production') return map[host]
  return host
}
