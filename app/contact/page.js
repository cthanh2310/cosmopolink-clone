'use client';

import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('✅ Success: “Your message has been sent successfully!”');
      } else {
        toast.error(
          '❌ Error: “Failed to send your message. Please try again later.”'
        );
      }
    } catch (error) {
      toast.error(
        '❌ Error: “Failed to send your message. Please try again later.”'
      );
    }
  };

  return (
    <>
      <Layout breadcrumbTitle='title'>
        <ToastContainer />
        <div>
          <section className='contact-section padding'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='contact-content'>
                    <div className='contact-left'>
                      <div className='adress-wrap'>
                        <div className='adress-box'>
                          <h3 className='title'>Office Adress</h3>
                          <ul className='adress-list'>
                            <li>
                              <i className='las la-map-marker' />
                              <span>
                                The Business Centre 132, My Street Kingston, New
                                York 12401
                                <strong>United States</strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className='adress-box'>
                          <h3 className='title'>Call Information</h3>
                          <ul className='adress-list list-2'>
                            <li>
                              <i className='las la-mobile' />
                              Phone:
                              <Link href='/tel:+123456789'>
                                (+1) 234 567 89
                              </Link>
                            </li>
                            <li>
                              <i className='las la-tty' />
                              Tel:
                              <Link href='/tel:+15412343010'>
                                +1-541-234-3010
                              </Link>
                            </li>
                            <li>
                              <i className='las la-envelope' />
                              Email:
                              <Link href='/mailto:envato@gmail.com'>
                                envato@gmail.com
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='contact-form-wrap'>
                      <h3 className='title'>Get in Touch</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                      </p>
                      <div className='contact-form'>
                        <form
                          onSubmit={handleSubmit}
                          className='form-horizontal'
                        >
                          <div className='form-group colum-row row'>
                            <div className='col-sm-6'>
                              <input
                                type='text'
                                id='fullname'
                                name='fullname'
                                className='form-control'
                                placeholder='Name'
                                required
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-sm-6'>
                              <input
                                type='email'
                                id='email'
                                name='email'
                                className='form-control'
                                placeholder='Email'
                                required
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className='form-group row'>
                            <div className='col-sm-6'>
                              <input
                                type='text'
                                id='phone'
                                name='phone'
                                className='form-control'
                                placeholder='Phone Number'
                                required
                                onChange={handleChange}
                              />
                            </div>
                            <div className='col-sm-6'>
                              <input
                                type='text'
                                id='website'
                                name='website'
                                className='form-control'
                                placeholder='Website Name'
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className='form-group row'>
                            <div className='col-md-12'>
                              <textarea
                                id='message'
                                name='message'
                                cols={30}
                                rows={5}
                                className='form-control address'
                                placeholder='Message'
                                required
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <button
                            id='submit'
                            className='default-btn'
                            type='submit'
                          >
                            Send Message
                            <span
                              style={{ top: '-154px', left: '-699.328px' }}
                            />
                          </button>
                          <div
                            id='form-messages'
                            className='alert'
                            role='alert'
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='map-wrapper'>
                    <div style={{ width: '100%' }}>
                      <iframe
                        width='100%'
                        height={840}
                        frameBorder={0}
                        scrolling='no'
                        marginHeight={0}
                        marginWidth={0}
                        src='https://maps.google.com/maps?width=100%25&height=640&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed'
                      >
                        &lt;a href="https://www.maps.ie/population/"&gt;Find
                        Population on Map&lt;/a&gt;
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ./ contact-section */}
          <section className='subscribe-section bg-grey-2'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='subscribe-content'>
                    <h3 className='title'>
                      Get the best blog stories into your inbox!
                    </h3>
                    <div className='subscribe-form'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Enter Your Email'
                      />
                      <button id='submit' className='default-btn' type='submit'>
                        <i className='lab la-telegram-plane' />
                        Subscribe
                      </button>
                      <div className='form-icon'>
                        <i className='las la-envelope' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='subscribe-thumb'>
                    <div className='line' />
                    <img src='/assets/img/images/subscribe-img.png' alt='img' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
