
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function About() {
	return (
		<>
			<Layout breadcrumbTitle="title">

				<div>
					<section className="about-section padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="about-content">
										<h3 className="title">The Car Industry’s Chip Shortage is Far From Over</h3>
										<p>
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
											laudantium, totam rem aperiam, the eaque ipsa quae ab illo inventore veritatis et quasi
											architecto beatae vitae dicta sunt explicabo. Nemo ipsam voluptatem quia voluptas sit
											aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
											voluptatem sequi nesciunt.
										</p>
										<div className="about-list-wrap">
											<ul className="about-list">
												<li><i className="las la-check-circle" />website should be easy to navigate</li>
												<li><i className="las la-check-circle" />Diving into UX and UI design</li>
												<li><i className="las la-check-circle" />Help website visual composition</li>
											</ul>
											<ul className="about-list">
												<li><i className="las la-check-circle" />Eye With Leading Lines</li>
												<li><i className="las la-check-circle" />Breaking down the barriers</li>
												<li><i className="las la-check-circle" />Website should be easy to navigate</li>
											</ul>
										</div>
										<h2 className="about-year">13 Years Experices</h2>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="about-thumb">
										<img src="/assets/img/images/about-img.jpg" alt="about" />
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* ./ about-section */}
					<section className="skill-section padding">
						<div className="skill-bg" />
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 offset-lg-6 no-padding">
									<div className="skill-content">
										<div className="skill-heading">
											<span>Our Skill</span>
											<h3 className="title">Make Beauty Thing with Passion</h3>
											<p>
												Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque
												laudantium, totam rem aperiam, the eaque ipsa quae ab illo inventore veritatis et
												quasi architecto beatae vitae dicta sunt explicabo. Nemo ipsam voluptatem quia
												voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
												qui ratione voluptatem sequi nesciunt.
											</p>
										</div>
										<ul className="skills-items">
											<li className="skills-item">
												<h5>Development</h5>
												<div className="progress">
													<div className="progress-bar wow slideInLeft" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ width: '80%', visibility: 'visible', animationDuration: '2000ms', animationDelay: '0ms', animationName: 'slideInLeft' }}>
														<span>85%</span>
													</div>
												</div>
											</li>
											<li className="skills-item">
												<h5>Success</h5>
												<div className="progress">
													<div className="progress-bar wow slideInLeft" data-wow-delay="200ms" data-wow-duration="2000ms" role="progressbar" style={{ width: '90%', visibility: 'visible', animationDuration: '2000ms', animationDelay: '200ms', animationName: 'slideInLeft' }}>
														<span>75%</span>
													</div>
												</div>
											</li>
											<li className="skills-item">
												<h5>Finished Projects</h5>
												<div className="progress">
													<div className="progress-bar wow slideInLeft" data-wow-delay="300ms" data-wow-duration="2000ms" role="progressbar" style={{ width: '75%', visibility: 'visible', animationDuration: '2000ms', animationDelay: '300ms', animationName: 'slideInLeft' }}>
														<span>90%</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* ./ skill-section */}
					<section className="team-section padding">
						<div className="container">
							<div className="team-top">
								<div className="left-item">
									<h3 className="title">Meet Our Team</h3>
								</div>
								<div className="right-item">
									<p>
										Sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium,
										totam rem aperiam, the eaque ipsa quae ab illo inventore veritatis et quasi architecto
										beatae
									</p>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-lg-4 col-md-6">
									<div className="team-item">
										<div className="team-thumb">
											<Link href="/author-details"><img src="/assets/img/images/team-1.jpg" alt="team" /></Link>
										</div>
										<div className="team-content">
											<h3 className="title">
												<Link href="/author-details">David bin</Link><span>Creative Director</span>
											</h3>
											<ul className="team-social">
												<li>
													<Link href="/#" className="facebook"><i className="lab la-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#" className="twitter"><i className="lab la-twitter" /></Link>
												</li>
												<li>
													<Link href="/#" className="linkedin"><i className="lab la-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#" className="instagram"><i className="lab la-instagram" /></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="team-item">
										<div className="team-thumb">
											<Link href="/author-details"><img src="/assets/img/images/team-2.jpg" alt="team" /></Link>
										</div>
										<div className="team-content">
											<h3 className="title">
												<Link href="/author-details">Maria David</Link><span>Manager &amp; QC</span>
											</h3>
											<ul className="team-social">
												<li>
													<Link href="/#" className="facebook"><i className="lab la-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#" className="twitter"><i className="lab la-twitter" /></Link>
												</li>
												<li>
													<Link href="/#" className="linkedin"><i className="lab la-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#" className="instagram"><i className="lab la-instagram" /></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="team-item">
										<div className="team-thumb">
											<Link href="/author-details"><img src="/assets/img/images/team-3.jpg" alt="team" /></Link>
										</div>
										<div className="team-content">
											<h3 className="title">
												<Link href="/author-details">Martin Bin</Link><span>Creative Director</span>
											</h3>
											<ul className="team-social">
												<li>
													<Link href="/#" className="facebook"><i className="lab la-facebook-f" /></Link>
												</li>
												<li>
													<Link href="/#" className="twitter"><i className="lab la-twitter" /></Link>
												</li>
												<li>
													<Link href="/#" className="linkedin"><i className="lab la-linkedin-in" /></Link>
												</li>
												<li>
													<Link href="/#" className="instagram"><i className="lab la-instagram" /></Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* ./ team-section */}
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
