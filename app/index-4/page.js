
import Layout from "@/components/layout/Layout"
import FashionBlog5 from "@/components/sections/FashionBlog5"
import HeroPost6 from "@/components/sections/HeroPost6"
import LatestNews from "@/components/sections/LatestNews"
import LatestPost from "@/components/sections/LatestPost"
import Promo from "@/components/sections/Promo"
import Subscribe4 from "@/components/sections/Subscribe4"
import VideoPost2 from "@/components/sections/VideoPost2"
export default function Home4() {
	return (
		<>
			<Layout headerStyle={4}>
				<HeroPost6 />
				<Promo />
				<LatestNews />
				<VideoPost2 />
				<LatestPost />
				<FashionBlog5 />
				<Subscribe4 />
			</Layout>
		</>
	)
}
