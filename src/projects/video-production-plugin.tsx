import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="映像制作の現場で動くプラグイン">
				<p>
					Line Stroke Pro は、After Effects
					向けに個人開発した汎用プラグインです。図形にきれいな枠線をつける機能を、軽快に動くことを最優先に設計しました。
				</p>
				<p>
					きっかけは、映像クリエイターの方との協働でした。「もっと軽く、もっと自由に枠線が描ければ」——そうした現場の声が、このプロジェクトの出発点です。
				</p>
			</ProjectSection>

			<ProjectSection title="工夫したところ">
				<p>
					映像制作では、プラグインの処理の重さがそのまま制作のリズムに響きます。だから最優先は速度でした。
				</p>
				<p>
					アンチエイリアスで生まれる半透明領域まで考慮した距離計算アルゴリズムを設計し、さらに隣接ピクセル間で計算結果を伝搬させることで探索範囲を大幅に絞り込みました。競技プログラミングで鍛えた数理最適化の感覚が、思いがけず役に立った瞬間でした。
				</p>
			</ProjectSection>

			<ProjectSection title="これまでの歩み">
				<ul className="list-disc space-y-1 pl-5">
					<li>プロの映像制作現場に導入</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const videoProductionPlugin: Project = {
	slug: "video-production-plugin",
	name: "Line Stroke Pro",
	tagline: "軽快に動く After Effects プラグイン",
	period: "2024.08 - 2024.11",
	roles: ["個人開発"],
	tags: ["画像処理", "アルゴリズム設計", "After Effects"],
	thumbnailUrl: "/projects/line-stroke-pro/thumbnail.png",
	body: Body,
};
