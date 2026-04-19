import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";

const languages = ["Python", "Java", "TypeScript", "C", "C++", "C#"];

const stacks = [
	{
		category: "AI / Machine Learning",
		items: [
			"PyTorch",
			"LLM Fine-Tuning",
			"LoRA",
			"物体認識",
			"知識蒸留",
			"OpenAI API",
			"Transformer",
			"NumPy",
		],
	},
	{
		category: "3D / Computer Graphics",
		items: [
			"3D Gaussian Splatting",
			"点群解析",
			"Open3D",
			"Viser",
			"Babylon.js",
		],
	},
	{
		category: "Web Development",
		items: ["TypeScript", "Next.js", "Node.js", "Express", "React"],
	},
];

export function Skills() {
	return (
		<section>
			<Container>
			<SectionTitle>Skills</SectionTitle>

			<div className="mb-6">
				<div className="flex flex-wrap justify-center gap-2">
					{languages.map((lang) => (
						<span
							key={lang}
							className="rounded-md bg-muted px-3 py-1 text-sm"
						>
							{lang}
						</span>
					))}
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4">
				{stacks.map((stack) => (
					<Card key={stack.category}>
						<CardHeader>
							<CardTitle>{stack.category}</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{stack.items.map((item) => (
									<span
										key={item}
										className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
									>
										{item}
									</span>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			</Container>
		</section>
	);
}
