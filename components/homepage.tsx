import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import { Badge } from "@nextui-org/react";
import styles from './Title.module.css';

type Props = {
  title: string
  coverImage: string
  excerpt: string
}

const HomePage = ({
  title,
  coverImage,
  excerpt,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage}/>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h2
            className={`mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight`}
          >
            about me
          </h2>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <p className="text-lg leading-relaxed mb-4">Through my degree and the five internships I've completed, I've picked up on a variety of technologies:</p>
          <p className="text-lg leading-relaxed mb-4">
            <Badge isSquared color="success" variant="flat" size="lg" style={{'marginRight': '10px'}}>Languages</Badge>
            <Badge variant="flat">C++</Badge>
            <Badge variant="flat">C</Badge>
            <Badge variant="flat">Python</Badge>
            <Badge variant="flat">Java</Badge>
            <Badge variant="flat">JavaScript</Badge>
            <Badge variant="flat">TypeScript</Badge>
            <Badge variant="flat">HTML</Badge>
            <Badge variant="flat">CSS</Badge>
            <Badge variant="flat">Rust</Badge>
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <Badge isSquared color="success" variant="flat" size="lg" style={{'marginRight': '10px'}}>Tools & Frameworks</Badge>
            <Badge variant="flat">React</Badge>
            <Badge variant="flat">Next.js</Badge>
            <Badge variant="flat">Vue.js</Badge>
            <Badge variant="flat">React Native</Badge>
            <Badge variant="flat">Redux</Badge>
            <Badge variant="flat">Node.js</Badge>
            <Badge variant="flat">Git</Badge>
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <Badge isSquared color="success" variant="flat" size="lg" style={{'marginRight': '10px'}}>Other</Badge>
            <Badge variant="flat">AWS</Badge>
            <Badge variant="flat">SumoLogic</Badge>
            <Badge variant="flat">MATLAB</Badge>
            <Badge variant="flat">SumoLogic</Badge>
            <Badge variant="flat">Cloud/Serverless Models</Badge>
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
