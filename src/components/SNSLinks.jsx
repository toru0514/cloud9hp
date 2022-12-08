import './SNSLinks.css'
import { snsLinks } from '../data'
import { Link } from './Link'

export const SNSLinks = () => {
  return (
    <div className="SNSLinks">
      {snsLinks.map((link) => <Item link={link}/>)}
    </div>
  )
}

export const Item = ({ link }) => {
  return (
    <Link key={link.id} to={link.url} external>
      <img
        className={`SNSLinks_icon SNSLinks_icon-${link.id}`}
        src={link.image}
        alt={link.name}/>
    </Link>
  )
}