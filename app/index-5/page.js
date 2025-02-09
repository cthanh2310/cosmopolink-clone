
import Layout from "@/components/layout/Layout"
import Cta6 from "@/components/sections/Cta6"
import EditorBlog4 from "@/components/sections/EditorBlog4"
import FashionBlog6 from "@/components/sections/FashionBlog6"
import HeroPost7 from "@/components/sections/HeroPost7"
import NewsPost4 from "@/components/sections/NewsPost4"
import Subscribe5 from "@/components/sections/Subscribe5"
import Trending2 from "@/components/sections/Trending2"
import Video2 from "@/components/sections/Video2"
export default function Home5() {
	return (
		<>
			<Layout headerStyle={5}>
				<HeroPost7 />
				<Trending2 />
				<EditorBlog4 />
				<Cta6 />
				<FashionBlog6 />
				<Video2 />
				<NewsPost4 />
				<Subscribe5 />
			</Layout>
		</>
	)
}
