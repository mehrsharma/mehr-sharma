import cn from 'classnames'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

type Props = {
  title: string
  src: any
}

const CoverImage = ({ title, src }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={'shadow-sm w-full'}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}

export default CoverImage
