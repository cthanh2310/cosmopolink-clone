import Layout from "@/components/layout/Layout"
import Categories from "@/components/sections/Categories"
import Cta1 from "@/components/sections/Cta1"
import Cta2 from "@/components/sections/Cta2"
import EditorBlog1 from "@/components/sections/EditorBlog1"
import FashionBlog1 from "@/components/sections/FashionBlog1"
import HeroPost1 from "@/components/sections/HeroPost1"
import HeroPost2 from "@/components/sections/HeroPost2"
import HeroPost3 from "@/components/sections/HeroPost3"
import News from "@/components/sections/News"
import NewsPost1 from "@/components/sections/NewsPost1"
import RecentPost from "@/components/sections/RecentPost"
import Subscribe1 from "@/components/sections/Subscribe1"
import Trending1 from "@/components/sections/Trending1"
import Watch from "@/components/sections/Watch"
export default function Home() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<News />
				<Trending1 />
				<HeroPost1 />
				<Cta1 />
				<EditorBlog1 />
				<HeroPost2 />
				<Categories />
				<NewsPost1 />
				<Watch />
				<FashionBlog1 />
				<Cta2 />
				<HeroPost3 />
				<Subscribe1 />
				<RecentPost />
			</Layout>
		</>
	)
}
