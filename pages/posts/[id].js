import { getAllPostIds, getPostData  } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <h1 className={utilStyles.headingXL}>{postData.title}</h1>
      <br />
      {postData.id}
      <br />
      <h1 className={utilStyles.lightText}>{postData.date}</h1>
      <Date dateString={postData.date} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
