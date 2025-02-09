'use client'
import Link from 'next/link'

export default function Menu({ transparent, scroll }) {
	return (
		<>
			<ul className="main-menu">
				<li className="active">
					<Link href="/">Home</Link>
					<ul>
						<li className="active"><Link href="/">Megazine Home</Link></li>
						<li><Link href="/index-2">Newspaper Home</Link></li>
						<li><Link href="/index-3">Technology Home</Link></li>
						<li><Link href="/index-4">Illustration Home</Link></li>
						<li><Link href="/index-5">Sports Home</Link></li>
					</ul>
				</li>
				<li>
					<Link href="/#">Features</Link>
					<ul>
						<li><Link href="/author-details">Author Details</Link></li>
						<li><Link href="/video-playlist-1">Video Playlist 1</Link></li>
						<li><Link href="/video-playlist-2">Video Playlist 2</Link></li>
						<li><Link href="/video-playlist-3">Video Playlist 3</Link></li>
					</ul>
				</li>
				<li>
					<Link href="/#">Categories</Link>
					<ul>
						<li><Link href="/blog-default">Blog Default</Link></li>
						<li><Link href="/blog-layout-1">Blog Layout 1</Link></li>
						<li><Link href="/blog-layout-2">Blog Layout 2</Link></li>
						<li><Link href="/blog-layout-3">Blog Layout 3</Link></li>
						<li><Link href="/blog-layout-4">Blog Layout 4</Link></li>
					</ul>
				</li>
				<li>
					<Link href="/#">Post Styles</Link>
					<ul>
						<li><Link href="/single-post-1">Single Post Layout 1</Link></li>
						<li><Link href="/single-post-2">Single Post Layout 2</Link></li>
						<li><Link href="/single-post-3">Single Post Layout 3</Link></li>
					</ul>
				</li>
				<li>
					<Link href="/#">Pages</Link>
					<ul>
						<li><Link href="/about">About Us</Link></li>
						<li><Link href="/team">Our Team</Link></li>
						<li><Link href="/team-single">Team Single</Link></li>
						<li><Link href="/error-page">404 Error</Link></li>
					</ul>
				</li>
				<li><Link href="/contact">Contact</Link></li>
			</ul>
		</>
	)
}
