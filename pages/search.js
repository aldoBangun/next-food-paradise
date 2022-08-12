import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ResultList from '@/components/search/ResultList'
import SearchBar from '@/components/UI/SearchBar'
import { Container } from 'react-bootstrap'

const Search = () => {
  const result = []
  return (
    <Container>
      <SearchBar/>
      <ResultList result={result} />
    </Container>
  )
}

export default Search
