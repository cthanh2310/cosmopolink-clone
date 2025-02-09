'use client';
import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // Import useParams
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  speed: 700,
  navigation: {
    nextEl: '.team-nav-wrap .swiper-prev',
    prevEl: '.team-nav-wrap .swiper-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
};

export default function TeamSingle() {
  const { id } = useParams(); // Get the id from the route parameters

  const [teamMember, setTeamMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchTeamMember = async () => {
        try {
          const res = await fetch(
            'https://api.arckipel.net/v2/platform/getTeamMembers?apiKey=GtHk2jmn4L9vcYpxXcB6WXEsF7Mywg&platformUuid=cosmopolink-5b73306d88d4813a',
            { cache: 'no-store' }
          );

          if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
          }

          const data = await res.json();
          console.log('===data', data);

          const member = data.values.find((item) => item.id === Number(id));

          if (member) {
            setTeamMember(member);
          } else {
            setError('Team member not found');
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchTeamMember();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!teamMember) {
    return <p>No team member data available</p>;
  }

  return (
    <>
      <Layout breadcrumbTitle={teamMember.displayname}>
        <div>
          <section className='team-details padding'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='team-details-left'>
                    <img
                      src={
                        teamMember.picture.url ||
                        '/assets/img/images/default-member.jpg'
                      }
                      alt={teamMember.displayname}
                    />
                    <div className='team-member-info'>
                      <h3 className='title'>{teamMember.displayname}</h3>
                      <span className='prof'>{teamMember.position}</span>
                      <ul className='team-list'>
                        <li>
                          Website:{' '}
                          <Link href={`https://${teamMember.website}`}>
                            {teamMember.website}
                          </Link>
                        </li>
                        <li>
                          Phone:{' '}
                          <Link href={`tel:${teamMember.phone}`}>
                            {teamMember.phone}
                          </Link>
                        </li>
                        <li>
                          Email:{' '}
                          <Link href={`mailto:${teamMember.email}`}>
                            {teamMember.email}
                          </Link>
                        </li>
                        <li>
                          Address: <span>{teamMember.address}</span>
                        </li>
                      </ul>
                      <ul className='team-social'>
                        <li>
                          <Link href='/#' className='facebook'>
                            <i className='lab la-facebook-f' />
                          </Link>
                        </li>
                        <li>
                          <Link href='/#' className='twitter'>
                            <i className='lab la-twitter' />
                          </Link>
                        </li>
                        <li>
                          <Link href='/#' className='linkedin'>
                            <i className='lab la-linkedin-in' />
                          </Link>
                        </li>
                        <li>
                          <Link href='/#' className='instagram'>
                            <i className='lab la-instagram' />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='team-details-content mb-50'>
                    <h3 className='title'>Information</h3>
                    <p className='mb-20'>{teamMember.presentation}</p>
                  </div>
                  <div className='team-details-content'>
                    <h3 className='title'>Skill</h3>
                    <ul className='skills-items'>
                      {teamMember.skills?.map((skill, index) => (
                        <li key={index} className='skills-item'>
                          <h5>{skill.name}</h5>
                          <div className='progress'>
                            <div
                              className='progress-bar wow slideInLeft'
                              data-wow-delay={`${index * 100}ms`}
                              data-wow-duration='2000ms'
                              role='progressbar'
                              style={{
                                width: skill.percentage,
                                visibility: 'visible',
                                animationDuration: '2000ms',
                                animationDelay: `${index * 100}ms`,
                                animationName: 'slideInLeft',
                              }}
                            >
                              <span>{skill.percentage}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='team-section padding pt-0'>
            <div className='container'>
              <div className='team-nav-wrap'>
                <h3 className='title'>Related Team Member</h3>
                <div className='swiper-arrow'>
                  <div className='swiper-nav swiper-next'>
                    <i className='las la-angle-left' />
                  </div>
                  <div className='swiper-nav swiper-prev'>
                    <i className='las la-angle-right' />
                  </div>
                </div>
              </div>
              <div className='team-carousel swiper'>
                <Swiper
                  {...swiperOptions}
                  className='swiper-wrapper swiper-container'
                >
                  <SwiperSlide>
                    <div className='team-item'>
                      <div className='team-thumb'>
                        <Link href='/team-single'>
                          <img src='/assets/img/images/team-4.jpg' alt='team' />
                        </Link>
                      </div>
                      <div className='team-content'>
                        <h3 className='title'>
                          <Link href='/team-single'>David bin</Link>
                          <span>Creative Director</span>
                        </h3>
                        <ul className='team-social'>
                          <li>
                            <Link href='/#' className='facebook'>
                              <i className='lab la-facebook-f' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='twitter'>
                              <i className='lab la-twitter' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='linkedin'>
                              <i className='lab la-linkedin-in' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='instagram'>
                              <i className='lab la-instagram' />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='team-item'>
                      <div className='team-thumb'>
                        <Link href='/team-single'>
                          <img src='/assets/img/images/team-6.jpg' alt='team' />
                        </Link>
                      </div>
                      <div className='team-content'>
                        <h3 className='title'>
                          <Link href='/team-single'>Martin Bin</Link>
                          <span>Creative Director</span>
                        </h3>
                        <ul className='team-social'>
                          <li>
                            <Link href='/#' className='facebook'>
                              <i className='lab la-facebook-f' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='twitter'>
                              <i className='lab la-twitter' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='linkedin'>
                              <i className='lab la-linkedin-in' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='instagram'>
                              <i className='lab la-instagram' />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='team-item'>
                      <div className='team-thumb'>
                        <Link href='/team-single'>
                          <img src='/assets/img/images/team-7.jpg' alt='team' />
                        </Link>
                      </div>
                      <div className='team-content'>
                        <h3 className='title'>
                          <Link href='/team-single'>David bin</Link>
                          <span>Creative Director</span>
                        </h3>
                        <ul className='team-social'>
                          <li>
                            <Link href='/#' className='facebook'>
                              <i className='lab la-facebook-f' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='twitter'>
                              <i className='lab la-twitter' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='linkedin'>
                              <i className='lab la-linkedin-in' />
                            </Link>
                          </li>
                          <li>
                            <Link href='/#' className='instagram'>
                              <i className='lab la-instagram' />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
