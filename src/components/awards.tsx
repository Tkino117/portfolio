import { SectionTitle } from "@/components/section-title";

const awards = [
	{
		year: "2025",
		title: "しのはら財団 研究助成 2025年度 採択",
		description:
			"林内自動航行ドローンの研究開発（YAMAMORI）",
	},
	{
		year: "2025",
		title: "北海道 Society 5.0 みらい創造ワークショップ 2025 優勝",
		description:
			"森林デジタルツインと XR による林業支援基盤の提案（YAMAMORI）",
	},
	{
		year: "2025",
		title: "メディアネットワーク演習 II 2025年度 優勝",
		description:
			"スケジュール共有 SNS「Time Share」のチーム開発",
	},
	{
		year: "2024",
		title: "しのはら財団 研究助成 2024年度 採択",
		description:
			"森林デジタルツインの研究開発（YAMAMORI）",
	},
	{
		year: "2024",
		title: "メディアネットワーク演習 I 2024年度 優勝",
		description:
			"スマート服薬管理ロボットのシステム開発",
	},
];

export function Awards() {
	return (
		<section>
			<SectionTitle>Awards / Achievements</SectionTitle>
			<div className="space-y-6">
				{awards.map((award, i) => (
					<div key={i} className="flex gap-4">
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
		</section>
	);
}
