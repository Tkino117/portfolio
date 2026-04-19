import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="Overview">
				<p>
					映像クリエイターと連携し、図形に高品質な枠線を付加する汎用プラグイン (Adobe After Effects 向け) を個人開発しました。映像制作現場ではプラグインの軽量化が重要視されるため、競技プログラミングで培った数理最適化の知見を生かし、軽量に動作するアルゴリズムを設計・実装しました。
				</p>
			</ProjectSection>

			<ProjectSection title="開発内容">
				<ul className="list-disc space-y-1 pl-5">
					<li>アンチエイリアスによる半透明領域を考慮した距離計算アルゴリズムの設計</li>
					<li>隣接ピクセル計算の伝搬を利用した探索範囲の最適化</li>
				</ul>
			</ProjectSection>

			<ProjectSection title="実績">
				<ul className="list-disc space-y-1 pl-5">
					<li>プロの映像制作現場への導入</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const videoProductionPlugin: Project = {
	slug: "video-production-plugin",
	name: "Line Stroke Pro",
	tagline: "After Effects 向け高品質枠線プラグイン",
	period: "2024.08 - 2024.11",
	roles: ["個人開発"],
	tags: ["画像処理", "アルゴリズム設計", "After Effects"],
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
