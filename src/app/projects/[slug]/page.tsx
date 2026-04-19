import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProjectHeader } from "@/components/project/project-header";
import { projects } from "@/projects";

type Props = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		notFound();
	}

	const Body = project.body;

	return (
		<Container className="py-12">
			<Link
				href="/"
				className="text-sm text-muted-foreground hover:underline"
			>
				&larr; Back
			</Link>

			<div className="mt-8 space-y-12">
				<ProjectHeader project={project} />
				<article className="space-y-12">
					<Body />
				</article>
			</div>
		</Container>
	);
}
