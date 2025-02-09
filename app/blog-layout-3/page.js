
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogLayout3() {
	return (
		<>
			<Layout breadcrumbTitle="title">

				<div>
					<section className="recent-post-area padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="news-post-wrap">
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-1.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-blue">Tech</Link>
												<h3 className="title">
													<Link href="/single-post-1">How To Change The Icons For Your Favorite Apps On MacOS</Link>
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
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-2.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-blue-light">Business</Link>
												<h3 className="title">
													<Link href="/single-post-1">How Product Designers Can Gamification for any Good.</Link>
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
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-3.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-green">Sports</Link>
												<h3 className="title">
													<Link href="/single-post-1">Classic Training Programs for Professional NFL Players</Link>
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
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-4.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-yellow">Food</Link>
												<h3 className="title">
													<Link href="/single-post-1">The 6 Best &amp; Worst Foods for Your Skin and Health</Link>
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
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-5.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-pink">Lifestyle</Link>
												<h3 className="title">
													<Link href="/single-post-1">Navigation System Doesn Work in Space? We’ll See works.</Link>
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
								</div>
								<div className="col-lg-6">
									<div className="news-post-wrap">
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-6.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-blue">Tech</Link>
												<h3 className="title">
													<Link href="/single-post-1">How To Change The Icons For Your Favorite Apps On MacOS</Link>
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
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-7.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-blue-light">Business</Link>
												<h3 className="title">
													<Link href="/single-post-1">How Product Designers Can Gamification for any Good.</Link>
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
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-8.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-green">Sports</Link>
												<h3 className="title">
													<Link href="/single-post-1">Classic Training Programs for Professional NFL Players</Link>
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
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-9.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-yellow">Food</Link>
												<h3 className="title">
													<Link href="/single-post-1">The 6 Best &amp; Worst Foods for Your Skin and Health</Link>
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
										<div className="post-card news-post">
											<div className="post-thumb">
												<Link href="/single-post-1"><img src="/assets/img/post/news-post-10.jpg" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="card-btn bg-pink">Lifestyle</Link>
												<h3 className="title">
													<Link href="/single-post-1">Navigation System Doesn Work in Space? We’ll See works.</Link>
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
								</div>
							</div>
							<div className="post-pagination">
								<ul className="pagination-list">
									<li><Link href="/#">1</Link></li>
									<li className="active"><Link href="/#">2</Link></li>
									<li><Link href="/#">3</Link></li>
								</ul>
								<div className="pagination-right">
									<Link href="/#"><i className="las la-angle-right" /></Link>
								</div>
							</div>
						</div>
					</section>
					{/* ./ recent-post-area */}
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
