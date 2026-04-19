import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { ProjectMeta } from "@/projects/types";

export function ProjectHeader({ project }: { project: ProjectMeta }) {
	return (
		<header className="space-y-6">
			{project.coverUrl && (
				<div className="relative aspect-video overflow-hidden rounded-lg">
					<Image
						src={project.coverUrl}
						alt={project.name}
						fill
						className="object-cover"
						priority
					/>
				</div>
			)}

			<div className="space-y-2">
				<h1 className="text-4xl font-bold">{project.name}</h1>
				{project.tagline && (
					<p className="text-lg text-muted-foreground">{project.tagline}</p>
				)}
			</div>

			<dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
				{project.period && (
					<>
						<dt className="text-muted-foreground">Period</dt>
						<dd>{project.period}</dd>
					</>
				)}
				{project.roles && project.roles.length > 0 && (
					<>
						<dt className="text-muted-foreground">Role</dt>
						<dd>{project.roles.join(" / ")}</dd>
					</>
				)}
				{project.tags && project.tags.length > 0 && (
					<>
						<dt className="text-muted-foreground">Tags</dt>
						<dd>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
									>
										{tag}
									</span>
								))}
							</div>
						</dd>
					</>
				)}
			</dl>

			{project.links && project.links.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{project.links.map((link) => (
						<Button key={link.url} asChild variant="outline" size="sm">
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label}
							</a>
						</Button>
					))}
				</div>
			)}
		</header>
	);
}
