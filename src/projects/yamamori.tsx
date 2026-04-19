import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="Overview">
				<p>
					YAMAMORI は、森林・林業関係者へのヒアリングを通して見えてきた現場の課題に対し、テクノロジーを活かして解決に取り組んでいるプロジェクトです。日本の林業は、担い手不足、高い労災率、低い収益性といった深刻な課題を抱えており、雪崩リスクのある危険な現場での作業や、持続可能性を損なう皆伐のような対応が生じています。
				</p>
				<p>
					YAMAMORI は「ドローンの自動航行で森林を観測し、得られたデータから森林資源を把握するとともに、XR を活用した施業支援を行うこと」を通じて、森づくりをより賢く、安全にすることを目指します。現在はプロトタイプとして施業支援のデモアプリケーションまで実現しています。
				</p>
			</ProjectSection>

			<ProjectSection title="担当領域">
				<p>
					技術統括および開発メンバーとして、現場測量からアプリケーション開発まで幅広く担当しています。
				</p>
				<ul className="list-disc space-y-1 pl-5">
					<li>ドローン航行による森林内部の撮影・測量</li>
					<li>360度映像からの高精度な 3D Gaussian Splatting モデル構築</li>
					<li>樹木の個体レベルの情報を扱うライブラリ開発</li>
					<li>カメラ映像からリアルタイムに樹木個体を識別する AI モデル (XR 基盤)</li>
					<li>林業支援 Web アプリケーションの開発 (選木作業支援)</li>
				</ul>
			</ProjectSection>

			<ProjectSection title="技術的なこだわり">
				<p>
					樹木分析は 3D Gaussian Splatting の先行事例が少ない未踏領域です。森林解析における重要な課題の一つが樹木の個体分離ですが、複雑な形状の広葉樹を幾何学的手法だけで分離するのは容易ではありません。
				</p>
				<p>
					この課題に対し、2D 画像認識の高い識別性能に着目しました。2D 画像で幹部分のマスクを作成し、その領域を人工色で塗りつぶした画像から 3DGS を再構成することで、3DGS 上で幹部分が明確に強調され、個体分離につなげられます。異なる技術の強みを柔軟に組み合わせることで、森林解析の複雑な課題を解決しています。
				</p>
			</ProjectSection>

			<ProjectSection title="実績">
				<ul className="list-disc space-y-1 pl-5">
					<li>しのはら財団研究助成 2024年度 / 2025年度 採択</li>
					<li>北海道 Society 5.0 みらい創造ワークショップ 2025 優勝</li>
					<li>YAMAHA 発動機・前田一歩園財団・OutWoods などとの連携</li>
					<li>北海道大学研究林、東京大学演習林、九州大学演習林など複数個所での実証</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const yamamori: Project = {
	slug: "yamamori",
	name: "YAMAMORI",
	tagline: "森林デジタルツインと XR による林業支援基盤",
	period: "2025.02 - 現在",
	roles: ["研究リーダー", "技術開発・プロトタイプ制作"],
	tags: ["3DGS", "Computer Vision", "XR", "GIS", "Forestry"],
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
