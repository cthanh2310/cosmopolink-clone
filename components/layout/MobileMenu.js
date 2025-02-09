'use client'
import { useState } from 'react'
import Link from "next/link"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
	const [isAccordion, setIsAccordion] = useState(1)
	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className={`mobile-navigation-menu ${isMobileMenu ? "open-mobile-menu" : ""}`}>
				<button id="mobile-menu-close" onClick={handleMobileMenu}><i className="la la-close" /></button>
				<ul className="main-menu">
					<li className={isAccordion == 1 ? "dropdown_menu dropdown-open" : "dropdown_menu"}>
						<Link href="/">Home<span /></Link>
						<ul style={{ display: `${isAccordion  == 1 ? "block" : "none"}` }}>
							<li className="active"><Link href="/">Megazine Home<span /></Link></li>
							<li><Link href="/index-2">Newspaper Home<span /></Link></li>
							<li><Link href="/index-3">Technology Home<span /></Link></li>
							<li><Link href="/index-4">Illustration Home<span /></Link></li>
							<li><Link href="/index-5">Sports Home<span /></Link></li>
						</ul>
						<span className={isAccordion == 1 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleAccordion(1)} />
					</li>
					<li className={isAccordion == 2 ? "dropdown_menu dropdown-open" : "dropdown_menu"}>
						<Link href="/#">Features<span /></Link>
						<ul style={{ display: `${isAccordion  == 2 ? "block" : "none"}` }}>
							<li><Link href="/author-details">Author Details<span /></Link></li>
							<li><Link href="/video-playlist-1">Video Playlist 1<span /></Link></li>
							<li><Link href="/video-playlist-2">Video Playlist 2<span /></Link></li>
							<li><Link href="/video-playlist-3">Video Playlist 3<span /></Link></li>
						</ul>
						<span  className={isAccordion == 2 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleAccordion(2)} />
					</li>
					<li className={isAccordion == 3 ? "dropdown_menu dropdown-open" : "dropdown_menu"}>
						<Link href="/#">Categories<span /></Link>
						<ul style={{ display: `${isAccordion  == 3 ? "block" : "none"}` }}>
							<li><Link href="/blog-default">Blog Default<span /></Link></li>
							<li><Link href="/blog-layout-1">Blog Layout 1<span /></Link></li>
							<li><Link href="/blog-layout-2">Blog Layout 2<span /></Link></li>
							<li><Link href="/blog-layout-3">Blog Layout 3<span /></Link></li>
							<li><Link href="/blog-layout-4">Blog Layout 4<span /></Link></li>
						</ul>
						<span  className={isAccordion == 3 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleAccordion(3)} />
					</li>
					<li className={isAccordion == 4 ? "dropdown_menu dropdown-open" : "dropdown_menu"}>
						<Link href="/#">Post Styles<span /></Link>
						<ul style={{ display: `${isAccordion  == 4 ? "block" : "none"}` }}>
							<li><Link href="/single-post-1">Single Post Layout 1<span /></Link></li>
							<li><Link href="/single-post-2">Single Post Layout 2<span /></Link></li>
							<li><Link href="/single-post-3">Single Post Layout 3<span /></Link></li>
						</ul>
						<span  className={isAccordion == 4 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleAccordion(4)} />
					</li>
					<li className={isAccordion == 5 ? "dropdown_menu dropdown-open" : "dropdown_menu"}>
						<Link href="/#">Pages<span /></Link>
						<ul style={{ display: `${isAccordion  == 5 ? "block" : "none"}` }}>
							<li><Link href="/about">About Us<span /></Link></li>
							<li><Link href="/team">Our Team<span /></Link></li>
							<li><Link href="/team-single">Team Single<span /></Link></li>
							<li><Link href="/error-page">404 Error<span /></Link></li>
						</ul>
						<span  className={isAccordion == 5 ? "dropdown-plus dropdown-open" : "dropdown-plus"} onClick={() => handleAccordion(5)} />
					</li>
					<li><Link href="/contact">Contact</Link></li>
				</ul></div>

		</>
	)
}
