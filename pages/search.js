import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ResultList from '@/components/search/ResultList'
import SearchBar from '@/components/UI/SearchBar'
import { Container } from 'react-bootstrap'
import { search } from 'features/slices/search'
import { useDispatch } from 'react-redux'
import Layout from '@/components/layout/Layout'

const Search = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const keyword = router.query.keyword

  useEffect(() => {
    dispatch(search(keyword))
  }, [dispatch, keyword])

  return (
    <Container>
      <SearchBar/>
      <ResultList />
    </Container>
  )
}

Search.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Search
