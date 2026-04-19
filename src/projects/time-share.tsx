import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="「いつ空いてる？」を気軽に">
				<p>
					Time Share は、予定を気軽にシェアできる
					SNS をコンセプトに、チームで開発した Web
					サービスです。カレンダーアプリはかしこまりすぎ、チャットのやり取りは流れてしまう——その間にある、ゆるい予定共有の形を作りたくて始まりました。
				</p>
			</ProjectSection>

			<ProjectSection title="こだわったこと">
				<p>
					授業の課題として終わらせるのではなく、実際に人が使えるサービスとして世に出すことを大事にしました。設計段階で
					API
					仕様を固めてチーム内の役割を整理し、最終的に
					VPS にデプロイして公開まで漕ぎ着けたのが、このプロジェクトで一番嬉しかった瞬間です。
				</p>
			</ProjectSection>

			<ProjectSection title="担当領域">
				<p>
					開発リーダーとしてプロジェクト全体の進行を整理しつつ、実装ではバックエンドを担当しました。
				</p>
			</ProjectSection>

			<ProjectSection title="これまでの歩み">
				<ul className="list-disc space-y-1 pl-5">
					<li>メディアネットワーク演習 II 2025年度 優勝</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const timeShare: Project = {
	slug: "time-share",
	name: "Time Share",
	tagline: "予定を気軽にシェアできる SNS",
	period: "2025.05 - 2025.07",
	roles: ["開発リーダー", "バックエンド開発"],
	tags: ["Node.js", "TypeScript", "Web API", "VPS"],
	thumbnailUrl: "/projects/time-share/thumbnail.png",
	body: Body,
};
