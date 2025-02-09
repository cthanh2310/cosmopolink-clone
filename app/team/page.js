// app/team/page.tsx
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

async function fetchTeamMembers() {
  const res = await fetch(
    'https://api.arckipel.net/v2/platform/getTeamMembers?apiKey=GtHk2jmn4L9vcYpxXcB6WXEsF7Mywg&platformUuid=cosmopolink-5b73306d88d4813a',
    { cache: 'no-store' } // Prevent caching if dynamic updates are needed
  );

  if (!res.ok) {
    console.error('Failed to fetch team members:', res.statusText);
    return [];
  }

  const data = await res.json();
  return data.values || [];
}

export default async function TeamPage() {
  const teamMembers = await fetchTeamMembers();

  return (
    <Layout breadcrumbTitle='Team'>
      <div>
        <section className='team-section team-2 padding'>
          <div className='container'>
            <div className='row'>
              {teamMembers.map((member) => (
                <div key={member.id} className='col-lg-4 col-md-6'>
                  <div className='team-item'>
                    <div className='team-thumb'>
                      <Link href={`/team-single/${member.id}`}>
                        <img
                          src={member.picture.url}
                          alt={member.displayname}
                        />
                      </Link>
                    </div>
                    <div className='team-content'>
                      <h3 className='title'>
                        <Link href={`/team-single/${member.id}`}>
                          {member.displayname}
                        </Link>
                        <span>{member.position}</span>
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
                </div>
              ))}
            </div>
          </div>
        </section>
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
  );
}
