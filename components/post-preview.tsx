import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import GithubLink from '../interfaces/githubLink'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  githubLink: GithubLink
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  githubLink,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <a href = {githubLink.url} target="_blank"><CoverImage title={title} src={coverImage} /></a>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          href={githubLink.url}
          className="hover:underline"
          target="_blank"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
