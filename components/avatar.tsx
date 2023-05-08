type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <a href="https://github.com/mehrsharma" target="_blank"><img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> </a>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
