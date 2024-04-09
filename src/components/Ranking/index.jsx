import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti'
import { Container } from './styles'

export function Ranking({ rate }) {
  const stars = []

  for (let i = 0; i < 5; i++) {
    let star = i < rate ? TiStarFullOutline : TiStarOutline

    stars.push(star)
  }

  return (
    <Container>
      {stars.map((Star, i) => (
        <Star key={i} />
      ))}
    </Container>
  )
}