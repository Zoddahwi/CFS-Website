import React from 'react'
import Image3 from '../Assets/CFS_bg3.png'

const Objectives = () => {
  return (
    <div className='px-20 py-8'>
      <div className='flex items-center gap-10'>
        <div>
         <h2 className='text-3xl font-medium pb-10 text-justify'>Objectives</h2>
         <p className='text-justify leading-7 pb-2'>
         To embark on key interventions that contribute to the promotion of Mental Health through 
         mitigation of preventable abuses of perpetrators (including those among teachers, 
         parents, guardians, social groups etc.). This will be pursued through targeted measures 
         for prevention, management, resolution and post-recovery.
         </p>

         <p className='text-justify leading-7'>
         We work with stakeholders to support the upbringing of children and adolescents by promoting safe mental condition practices in households; and education support, to combat threats to emotional wellbeing, promote mental healthcare and the empowerment of women. The geographical area is Ghana, in partnership with stakeholders who would like to support from elsewhere.
         </p>
        </div>

        <div>
          <img src={Image3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Objectives
