
import Layout from "@/components/layout/Layout"
import Categories2 from "@/components/sections/Categories2"
import Cta5 from "@/components/sections/Cta5"
import EditorBlog3 from "@/components/sections/EditorBlog3"
import FashionBlog4 from "@/components/sections/FashionBlog4"
import HeroPost5 from "@/components/sections/HeroPost5"
import NewsPost3 from "@/components/sections/NewsPost3"
import Subscribe3 from "@/components/sections/Subscribe3"
import Video from "@/components/sections/Video"
export default function Home3() {
	return (
		<>
			<Layout headerStyle={3}>
				<HeroPost5 />
				<EditorBlog3 />
				<Categories2 />
				<Cta5 />
				<FashionBlog4 />
				<Video />
				<NewsPost3 />
				<Subscribe3 />
			</Layout>
		</>
	)
}
