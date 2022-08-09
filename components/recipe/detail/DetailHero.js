import { Container } from 'react-bootstrap'
import style from '@/styles/Recipe.module.css'
import RecipeUserActions from '@/components/profile/RecipeUserActions'
import { ArrowLeft } from 'react-bootstrap-icons'
import { useRouter } from 'next/router'

const DetailHero = ({ recipe }) => {
  const router = useRouter()

  return (
    <>
      {recipe && (
        <div
          className={style.detailHero}
          style={{ backgroundImage: `url(${recipe.photo})` }}
        >
          <Container className="d-flex flex-column justify-content-between">
            <div className={style.buttonBack}>
              <ArrowLeft
                onClick={() => router.back()}
                size={32}
                color="white"
              />
            </div>
            <div className="d-flex justify-content-between align-items-end">
              <div className="w-75">
                <h1 className={style.heroTitle}>{recipe.title}</h1>
                <p className="mb-0 text-lightgray">by {recipe.name}</p>
              </div>
              <RecipeUserActions show={true} />
            </div>
          </Container>
        </div>
      )}
    </>
  )
}

export default DetailHero
