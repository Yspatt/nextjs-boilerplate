import Head from 'next/head'

type Props = {
  title: string
}

const bla = 'var'

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    </div>
  )
}
