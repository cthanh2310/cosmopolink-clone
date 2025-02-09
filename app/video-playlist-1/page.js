
'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function VideoPlayList1() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	return (
		<>
			<Layout breadcrumbTitle="title">

				<div>
					<section className="watch-section">
						<div className="swiper mySwiper2">
							<Swiper
								spaceBetween={10}
								navigation={true}
								thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
								modules={[FreeMode, Navigation, Thumbs]}
								className="swiper-wrapper">
								<SwiperSlide>
									<div className="carousel-post">
										<div className="post-img">
											<img src="/assets/img/images/post-carousel-img-1.jpg" />
										</div>
										<div className="post-text">
											<h3 className="header"><span /><span>What to Watch</span><span /></h3>
										</div>
										<VideoPopup style={1} />
										<div className="post-card">
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-green">Travel</Link>
												<h3 className="title">
													<Link href="/single-post-1">Winners of the 2022 the Nature Conservancy any Photo Contest</Link>
												</h3>
												<ul className="post-list">
													<li className="author">
														by <span><Link href="/author-details">David Bin</Link></span>
													</li>
													<li className="date">July 29, 2024</li>
													<li><i className="las la-comments" />5</li>
												</ul>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="carousel-post">
										<div className="post-img">
											<img src="/assets/img/images/post-carousel-img-1.jpg" />
										</div>
										<div className="post-text">
											<h3 className="header"><span /><span>What to Watch</span><span /></h3>
										</div>
										<VideoPopup style={1} />
										<div className="post-card">
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-green">Travel</Link>
												<h3 className="title">
													<Link href="/single-post-1">Winners of the 2022 the Nature Conservancy any Photo Contest</Link>
												</h3>
												<ul className="post-list">
													<li className="author">
														by <span><Link href="/author-details">David Bin</Link></span>
													</li>
													<li className="date">July 29, 2024</li>
													<li><i className="las la-comments" />5</li>
												</ul>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="carousel-post">
										<div className="post-img">
											<img src="/assets/img/images/post-carousel-img-1.jpg" />
										</div>
										<div className="post-text">
											<h3 className="header"><span /><span>What to Watch</span><span /></h3>
										</div>
										<VideoPopup style={1} />
										<div className="post-card">
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-green">Travel</Link>
												<h3 className="title">
													<Link href="/single-post-1">Winners of the 2022 the Nature Conservancy any Photo Contest</Link>
												</h3>
												<ul className="post-list">
													<li className="author">
														by <span><Link href="/author-details">David Bin</Link></span>
													</li>
													<li className="date">July 29, 2024</li>
													<li><i className="las la-comments" />5</li>
												</ul>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="carousel-post">
										<div className="post-img">
											<img src="/assets/img/images/post-carousel-img-1.jpg" />
										</div>
										<div className="post-text">
											<h3 className="header"><span /><span>What to Watch</span><span /></h3>
										</div>
										<VideoPopup style={1} />
										<div className="post-card">
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-green">Travel</Link>
												<h3 className="title">
													<Link href="/single-post-1">Winners of the 2022 the Nature Conservancy any Photo Contest</Link>
												</h3>
												<ul className="post-list">
													<li className="author">
														by <span><Link href="/author-details">David Bin</Link></span>
													</li>
													<li className="date">July 29, 2024</li>
													<li><i className="las la-comments" />5</li>
												</ul>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
							<div className="swiper-arrow">
								<div className="swiper-nav swiper-next"><i className="las la-angle-left" /></div>
								<div className="swiper-nav swiper-prev"><i className="las la-angle-right" /></div>
							</div>
						</div>
						<div className="thumb-carousel-wrap">
							<div className="swiper mySwiper">
								<Swiper
									onSwiper={setThumbsSwiper}
									spaceBetween={10}
									slidesPerView={4}
									freeMode={true}
									watchSlidesProgress={true}
									modules={[FreeMode, Navigation, Thumbs]}
									className="swiper-wrapper">
									<SwiperSlide>
										<div className="carousel-thumb-post">
											<div className="carousel-thumb">
												<img src="/assets/img/images/post-carousel-thumb-1.jpg" />
											</div>
											<div className="thumb-content">
												<VideoPopup style={2} />
												<h4 className="thumb-title"><Link href="/#">The Season Courses and Salads wow!</Link></h4>
											</div>
											<div className="thumb-time">
												<span>9.37</span>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-thumb-post">
											<div className="carousel-thumb">
												<img src="/assets/img/images/post-carousel-thumb-2.jpg" />
											</div>
											<div className="thumb-content">
												<VideoPopup style={2} />
												<h4 className="thumb-title"><Link href="/#">The Season Courses and Salads wow!</Link></h4>
											</div>
											<div className="thumb-time">
												<span>9.37</span>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-thumb-post">
											<div className="carousel-thumb">
												<img src="/assets/img/images/post-carousel-thumb-3.jpg" />
											</div>
											<div className="thumb-content">
												<VideoPopup style={2} />
												<h4 className="thumb-title"><Link href="/#">The Season Courses and Salads wow!</Link></h4>
											</div>
											<div className="thumb-time">
												<span>9.37</span>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-thumb-post">
											<div className="carousel-thumb">
												<img src="/assets/img/images/post-carousel-thumb-4.jpg" />
											</div>
											<div className="thumb-content">
												<VideoPopup style={2} />
												<h4 className="thumb-title"><Link href="/#">The Season Courses and Salads wow!</Link></h4>
											</div>
											<div className="thumb-time">
												<span>9.37</span>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</section>
					{/* ./ watch-section */}
					<section className="subscribe-section bg-grey-2">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="subscribe-content">
										<h3 className="title">Get the best blog stories into your inbox!</h3>
										<div className="subscribe-form">
											<input type="email" id="email" name="email" className="form-control" placeholder="Enter Your Email" />
											<button id="submit" className="default-btn" type="submit">
												<i className="lab la-telegram-plane" />Subscribe
											</button>
											<div className="form-icon">
												<i className="las la-envelope" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="subscribe-thumb">
										<div className="line" />
										<img src="/assets/img/images/subscribe-img.png" alt="img" />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}
