import React, { useContext } from 'react'
import { UserDataContext } from '../../context/UserContext'

const Skills = () => {
  const { user } = useContext(UserDataContext)
  const skillCategories = Array.from(new Set(user?.skills?.map(skill => skill.category)))
  // const frontendSkills = user.skills.filter(obj => obj.category === 'frontend')
  // const backendSkills = user.skills.filter(obj => obj.category === 'backend')

  console.log(user?.skills, skillCategories)

  return (
    <section id="skills" className='min-h-[42rem] py-[5rem] px-3 text-gray-dd'>

      <h2 className='text-4xl font-medium text-center text-l-primary dark:text-d-primary'>Skills</h2>
      <h3 className='text-sm text-center text-l-secondary dark:text-d-secondary mt-1'>My Technical Level</h3>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-full content-center  sm:w-fit mx-auto mt-[4rem]">

        {skillCategories.map(category => (
          <div className="border-[0.025rem] text-l-secondary dark:text-d-secondary w-full sm:w-[25rem] rounded-3xl">
            <div key={category} className="px-4 py-4 sm:px-8 sm:py-5 ">
              <h4 key={category} className="text-l-primary dark:text-d-primary text-lg font-medium p-2 text-center capitalize">{category} Developer</h4>

              <div className="grid grid-cols-2 justify-items-center sm:content-start  gap-5 mt-5">
                {user?.skills?.map(skill => (
                  <>
                    {skill.category.toLowerCase() === category.toLowerCase() && (
                      <div key={skill.skillName} className="flex gap-1 w-[8.5rem] text-l-primary dark:text-d-primary">
                        <i class="ri-verified-badge-line"></i>
                        <div className="">
                          <h3 className="capitalize">{skill.skillName}</h3>
                          <h4 className="text-xs text-l-secondary dark:text-d-secondary capitalize">{skill.skillLevel}</h4>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills