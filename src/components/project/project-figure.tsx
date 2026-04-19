import Image from "next/image";

export function ProjectFigure({
	src,
	alt,
	caption,
}: {
	src: string;
	alt: string;
	caption?: string;
}) {
	return (
		<figure className="space-y-2">
			<div className="relative aspect-video overflow-hidden rounded-md">
				<Image src={src} alt={alt} fill className="object-cover" />
			</div>
			{caption && (
				<figcaption className="text-center text-sm text-muted-foreground">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
