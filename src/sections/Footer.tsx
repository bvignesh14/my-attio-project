import Image from 'next/image'
import React from 'react'
import footerLogo from '@/assets/logoWhite.svg'
import linkedin from '@/assets/linkedin.svg'
import twitter from '@/assets/twitter.svg'
import ball from '@/assets/ball.svg'

const Footer = () => {

    const footer =[
        {   
            id:1,
            title:'Product',
            links:['Changelog', 'Linkedin extension', 'Gmail extension', 'ios app', 'Android app', 'Security']
        },
        {
            id:2,
            title:'Import from',
            links:['Salesforce', 'Hubspot', 'Pipe drive', 'Zoho', 'Excel', 'CSV']
        },
        {
            id:3,
            title:'Company',
            links:['Customers', 'Blog', 'Careers', 'ios app', 'About']
        },
        {
            id:4,
            title:'Attio for',
            links:['Deal flow', 'Start ups']
        },
        {
            id:5,
            title:'Resources',
            links:['Startup program', 'Help center', 'Guides & tutorials', 'Automation templates', 'Developers', 'System status']
        },
        {
            id:6,
            title:'Integrations',
            links:['Email & Calendar', 'Census', 'Segment', 'June', 'Slack', 'Outreach', 'Mixmax', 'Mailchimp', 'Typeform', 'Pylon', 'Zapier', 'Make']
        },
    ]

  return (
    <section className='pt-40 bg-[#1C1D1F]'>
      <div className='max-w-7xl mx-auto flex flex-wrap px-6 md:px-2 md:flex-row justify-between gap-10'>
        <div>
            <Image src={footerLogo} alt='footer-logo' className='w-full object-cover' />
        </div>


        {footer.map((link)=>(
            <div key={link.id} className='flex flex-col gap-4'>
                <h2 className='text-gray-300 text-sm'>{link.title}</h2>
                <div className='flex flex-col gap-3'>
                    {link.links.map((link, index)=>(
                        <span key={index} className='text-[12px] text-gray-500 cursor-pointer'>{link}</span>
                    ))}
                </div>
            </div>
        ))}


      </div>

      <div className='w-full bg-[#242529]'>
        <div className='max-w-7xl mx-auto  p-4 flex items-center gap-4'>
            <Image src={linkedin} alt='linkedin-icon' className='text-gray-200' />
            <Image src={twitter} alt='linkedin-icon' />
            <Image src={ball} alt='linkedin-icon' />
        </div>
      </div>
    </section>
  )
}

export default Footer
