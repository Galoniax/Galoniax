import { getBySlug } from "@/data/projects";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = slug ? getBySlug(slug) : null;

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
