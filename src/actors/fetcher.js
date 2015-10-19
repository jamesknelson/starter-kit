import { documentQuery, documentListQuery } from '../queries'


const QUERIES = {
  documentList: documentListQuery,
  document: documentQuery,
}

// Fetch any data which is required by the current location, but isn't
// currently up to date
export default function fetcher(state, dispatch) {
  const query = QUERIES[state.location.name]

  if (query) {
    const result = query(state.db, state.location.options)
    if (!result.data && result.state !== 'fetching') {
      dispatch(result.fetch)
    }
  }
}
