import { SectionTitle } from "@/components/section-title";

export function About() {
	return (
		<section>
			<SectionTitle>About</SectionTitle>
			<div className="grid gap-8 md:grid-cols-[1fr_auto]">
				<div className="space-y-4 text-base leading-relaxed">
					<p>
						北海道大学 工学部に在籍しています。
						AI、3D、Web
						を横断する技術力を軸に、プロダクト開発から社会実装までを一貫して手がけてきました。
					</p>
					<p>
						代表的な活動として、森林 × IT プロジェクト「YAMAMORI（山守）」
						では研究リーダーを務め、ドローン撮影から 3D Gaussian Splatting
						による森林デジタルツインの構築、樹木の個体解析、XR
						による施業支援まで、北海道から九州まで現場に足を運びながら開発を推進しています。
					</p>
					<p>
						技術だけでは現場は動かない——ヒアリングで得たこの気づきを原点に、常にユーザーの声から逆算した開発を心がけています。
					</p>
				</div>
				<dl className="space-y-3 text-sm">
					<div>
						<dt className="text-muted-foreground">学歴</dt>
						<dd>北海道大学 工学部 情報エレクトロニクス学科 4年</dd>
					</div>
					<div>
						<dt className="text-muted-foreground">所属</dt>
						<dd>メディアダイナミクス研究室</dd>
					</div>
					<div>
						<dt className="text-muted-foreground">GPA</dt>
						<dd>3.96</dd>
					</div>
				</dl>
			</div>
		</section>
	);
}
