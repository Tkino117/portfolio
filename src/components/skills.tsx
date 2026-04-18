import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/section-title";

const languages = ["Python", "Java", "TypeScript", "C", "C++", "C#"];

const stacks = [
	{
		category: "AI",
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
		category: "3D",
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
							<ul className="space-y-1 text-sm text-muted-foreground">
								{stack.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
