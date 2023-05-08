import Container from '../components/container'
import Projects from '../components/projects'
import HomePage from '../components/homepage'
import Intro from '../components/title'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HomePage
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              excerpt={heroPost.excerpt}
            />
          )}

          {morePosts.length > 0 && <Projects posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'githubLink',
  ])

  return {
    props: { allPosts },
  }
}
