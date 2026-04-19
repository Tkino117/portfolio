import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="会話は、本当は枝分かれするもの">
				<p>
					Chat Tree は、AI
					との会話をツリー形式で扱える Web
					アプリです。「別の聞き方を試したい」「前の話の続きから分岐したい」——そんなとき、従来のチャット
					UI
					は長くなるほど見返しづらくなります。
				</p>
				<p>
					会話は直線ではなく、本当は枝分かれして探索するもの——そう考え、分岐と再探索がしやすい
					UI を設計しました。
				</p>
			</ProjectSection>

			<ProjectSection title="作ったもの">
				<ul className="list-disc space-y-1 pl-5">
					<li>OpenAI API と連携するバックエンドサーバー</li>
					<li>Next.js によるフロントエンドとツリー UI の設計</li>
				</ul>
			</ProjectSection>

			<ProjectSection title="これまでの歩み">
				<ul className="list-disc space-y-1 pl-5">
					<li>個人利用に加え、YAMAMORI チームの業務効率化にも活用中</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const chatTree: Project = {
	slug: "chat-tree",
	name: "Chat Tree",
	tagline: "ツリー形式の AI チャットアプリ",
	period: "2026.01 - 2026.03",
	roles: ["個人開発"],
	tags: ["Next.js", "OpenAI API", "TypeScript", "UI Design"],
	thumbnailUrl: "/general/black-background.png",
	body: Body,
};
