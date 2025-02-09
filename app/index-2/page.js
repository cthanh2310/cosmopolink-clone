
import Layout from "@/components/layout/Layout"
import Cta3 from "@/components/sections/Cta3"
import Cta4 from "@/components/sections/Cta4"
import EditorBlog2 from "@/components/sections/EditorBlog2"
import FashionBlog2 from "@/components/sections/FashionBlog2"
import FashionBlog3 from "@/components/sections/FashionBlog3"
import HeroPost4 from "@/components/sections/HeroPost4"
import NewsPost2 from "@/components/sections/NewsPost2"
import Subscribe2 from "@/components/sections/Subscribe2"
import TechBlog from "@/components/sections/TechBlog"
import VideoPost1 from "@/components/sections/VideoPost1"
export default function Home2() {
	return (
		<>
			<Layout headerStyle={2}>
				<HeroPost4 />
				<FashionBlog2 />
				<Cta3 />
				<EditorBlog2 />
				<TechBlog />
				<VideoPost1 />
				<FashionBlog3 />
				<Cta4 />
				<NewsPost2 />
				<Subscribe2 />
			</Layout>
		</>
	)
}
