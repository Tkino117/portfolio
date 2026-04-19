import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";

const awards = [
	{
		year: "2026.04",
		title: "しのはら財団 研究助成 2025-2026 採択",
		description:
			"林内自動航行ドローンの研究開発（YAMAMORI）",
	},
	{
		year: "2025.12",
		title: "北海道 Society 5.0 みらい創造ワークショップ 2025 優勝",
		description:
			"森林デジタルツインと XR による林業支援基盤の提案（YAMAMORI）",
	},
	{
		year: "2025.07",
		title: "メディアネットワーク演習 II 2025年度 優勝",
		description:
			"スケジュール共有 SNS「Time Share」のチーム開発",
	},
	{
		year: "2025.04",
		title: "しのはら財団 研究助成 2024-2025 採択",
		description:
			"森林デジタルツインの研究開発（YAMAMORI）",
	},
	{
		year: "2024.01",
		title: "メディアネットワーク演習 I 2024年度 優勝",
		description:
			"スマート服薬管理ロボットのシステム開発",
	},
];

export function Awards() {
	return (
		<section>
			<Container>
			<SectionTitle>Awards / Achievements</SectionTitle>
			<div className="relative mx-auto max-w-2xl space-y-6 border-l border-border pl-6">
				{awards.map((award, i) => (
					<div key={i} className="relative flex gap-4">
						<span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-foreground" />
						<span className="shrink-0 text-sm text-muted-foreground">
							{award.year}
						</span>
						<div>
							<p className="font-medium">{award.title}</p>
							<p className="text-sm text-muted-foreground">
								{award.description}
							</p>
						</div>
					</div>
				))}
			</div>
			</Container>
		</section>
	);
}
