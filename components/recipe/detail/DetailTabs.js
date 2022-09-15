import { Tabs, Tab, Container } from 'react-bootstrap'
import style from '@/styles/Recipe.module.css'
import TabIngredients from './TabIngredients'
import TabVideos from './TabVideos'
import CommentForm from '../comments/CommentForm'
import CommentList from '../comments/CommentList'

const DetailTabs = ({ ingredients, recipe_id: recipeId, videos }) => {

  return (
    <div className={style.detailTabs}>
      <Container className="py-3">
        <Tabs defaultActiveKey="ingredients" className="mb-3 gap-3">
          <Tab eventKey="ingredients" title="Ingredients">
            <TabIngredients ingredients={ingredients} />
          </Tab>
          <Tab eventKey="videos" title="Video Step">
            <TabVideos videos={videos} recipeId={recipeId} />
          </Tab>
        </Tabs>
      </Container>
      <Container className="pt-5">
        <CommentForm recipeId={recipeId} />
        <CommentList recipeId={recipeId} />
      </Container>
    </div>
  )
}

export default DetailTabs
