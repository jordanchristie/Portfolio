export const linkResolver = doc => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}
