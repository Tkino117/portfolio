export function ProjectVideo({
	src,
	title,
	caption,
}: {
	src: string;
	title: string;
	caption?: string;
}) {
	return (
		<figure className="space-y-2">
			<div className="relative aspect-video overflow-hidden rounded-md">
				<iframe
					src={src}
					title={title}
					className="absolute inset-0 h-full w-full"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			{caption && (
				<figcaption className="text-center text-sm text-muted-foreground">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
