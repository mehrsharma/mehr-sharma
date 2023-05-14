import CoverImage from './cover-image'
import { Badge } from "@nextui-org/react";

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
      <div className="mb-0 md:mb-1">
        <CoverImage title={title} src={coverImage}/>
      </div>
      <p className="text-sm leading-relaxed mb-14"><i>La Mare</i>, Théodore Rousseau circa. 1855</p>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div id="about">
          <h2
            className={`mb-0 md:mb-3 text-5xl md:text-7xl font-bold tracking-tighter leading-tight`}
          >
            about me
          </h2>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
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
            <Badge isSquared color="warning" variant="flat" size="lg" style={{'marginRight': '10px'}}>Tools & Frameworks</Badge>
            <Badge variant="flat">React</Badge>
            <Badge variant="flat">Next.js</Badge>
            <Badge variant="flat">Vue.js</Badge>
            <Badge variant="flat">React Native</Badge>
            <Badge variant="flat">Redux</Badge>
            <Badge variant="flat">Node.js</Badge>
            <Badge variant="flat">Git</Badge>
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <Badge isSquared color="error" variant="flat" size="lg" style={{'marginRight': '10px'}}>Other</Badge>
            <Badge variant="flat">AWS</Badge>
            <Badge variant="flat">SumoLogic</Badge>
            <Badge variant="flat">MATLAB</Badge>
            <Badge variant="flat">SumoLogic</Badge>
            <Badge variant="flat">Cloud/Serverless Models</Badge>
          </p>
          <p className="text-lg leading-relaxed mb-1">Check out some of my projects below, or take a look at the contact section to reach out or learn more about me!</p>
          <p className="text-sm leading-relaxed mb-4">&#40;This website was created using Next.js with React and Typescript&#41;</p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
