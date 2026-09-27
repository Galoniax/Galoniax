import { getByTitle } from "@/data/projects";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { title } = useParams<{ title: string }>();

  const project = title ? getByTitle(title) : null;

  return (
    <section>
      <header>
        <h1>{project?.title}</h1>
        <p>{project?.introduction}</p>
      </header>
      <main></main>
    </section>
  );
}
