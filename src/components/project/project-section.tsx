import type { ReactNode } from "react";

export function ProjectSection({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<section className="space-y-3">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<div className="space-y-3 text-base leading-relaxed">{children}</div>
		</section>
	);
}
