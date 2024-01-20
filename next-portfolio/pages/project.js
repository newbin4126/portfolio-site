import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <Head>
        <title>뉴빈 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        총 프로젝트 :{" "}
        {projects && projects.results ? projects.results.length : 0}
      </h1>

      {projects && projects.results
        ? projects.results.map((aProject) => (
            <>
              <h1>{aProject.properties.이름.title[0].plain_text}</h1>
              <ProjectItem key={aProject.id} data={aProject} />
            </>
          ))
        : null}
    </Layout>
  );
}

//빌드타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      // sorts: [
      //   {
      //     property: "Name",
      //     "direction:": "ascending",
      //   },
      //],
      page_size: 100,
    }),
  };

  let projects;
  let projectNames;

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  )
    .then((r) => r.json())
    .then((r) => {
      projectNames = r.results.map((aProject) => {
        aProject.properties.이름.title[0].plain_text;
      });
      projects = r;
    });
  console.log(`projectNames : ${projectNames}`);
  return {
    props: { projects },
  };
}
