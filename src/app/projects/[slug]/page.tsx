import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/components/projects";

type Props = {
	params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<div>
			<Link
				href="/"
				className="text-sm text-muted-foreground hover:underline"
			>
				&larr; Back
			</Link>
			<h1 className="mt-4 text-3xl font-bold">{project.name}</h1>
		</div>
	);
}
