import { Container, Row, Col } from 'react-bootstrap'
import { ChevronLeft } from 'react-bootstrap-icons'
import { useRouter } from 'next/router'
import style from '@/styles/Header.module.css'

const Header = ({ header }) => {
  const router = useRouter()
  const navigateBack = () => {
    router.back()
  }

  return (
    <>
      <header className={`${style.header} mb-3`}>
        <Container className="d-flex align-items-center">
          <Row className="flex-fill no-wrap">
            <Col xs={2}>
              <ChevronLeft onClick={navigateBack} size={24} className={style.btnBack}/>
            </Col>
            <Col xs={8} >
              <h5 className="text-primary text-center">{header}</h5>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
