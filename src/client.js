const sanityClient = require('@sanity/client')

export default sanityClient({
  projectId: 'a6q6x37w',
  dataset: 'production',
  useCdn: true
})