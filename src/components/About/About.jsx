import React from 'react';
import what from '../../images/what-is-6days.png'
import likeThis from '../../images/like-this.png'
import today from '../../images/today.png'
import complated from '../../images/completed.png'
import missed from '../../images/missed.png'

const About = () => {
  return (
    <div className='container mb-5 '>
          <div className='mt-10'>
              <h1 className='text-2xl mb-3'>1. what is this 2 days left, 9 days left, 23 days left, 44 days left and 66 days left ?</h1>
              <img className='w-3/4 border p-2' src={what} alt="" />

              <p className='mt-3 mb-2'>
              &#9679; meaning of this you have to pactice this problem after 2 days agian and then after 9 days agian and so on.
                  
              </p>
              <p className='mt-5 mb-2'>
              &#9679; and this days decrease by one automatically after each 24 hours, that you can see in the below image
              </p>

              <img className='w-3/4 border p-2' src={likeThis} alt="" />

              <p className='mt-5 mb-2'> &#9679;   and when 0 days left it will become Today and check box are clickeble, that means you have to practice this question that day, see below img for more understanding </p>

              <img className='w-3/4 border p-2' src={today} alt="" />

              <p className='mt-5 mb-2'> &#9679; if you practice this question give check box it will become complited, like below img</p>
              <img className='w-3/4 border p-2' src={complated} alt="" />

              <p className='mt-5 mb-2'>&#9679; now on the practice day if you don't practice this question and didn't give check box it will show you missed, like below image</p>

              <img className='w-3/4 border p-2' src={missed} alt="" />


     </div>
    </div>
  )
}

export default About
