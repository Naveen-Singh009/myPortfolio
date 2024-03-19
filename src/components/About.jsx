import React from 'react'

function About() {
  return (
    <div 
    name="about"
    className=' flex justify-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  '
    >
        <div className=' max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8 '>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <div>
                <p className=' text-xl mt-20'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis animi autem provident unde, adipisci, accusantium quae maiores blanditiis a ex eveniet cum vero laudantium dolorem, illum numquam fugit nam impedit corrupti obcaecati! Sed, illo. Deserunt suscipit, ex asperiores eius laboriosam cum officia provident et veniam quo delectus perspiciatis, sit magni sint corporis quisquam! Lorem ipsum dolor, sit .
                </p>
                <br />
                <p className=' text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam ab vero quae magnam facilis beatae obcaecati laboriosam numquam, provident aspernatur totam enim harum placeat aliquam perspiciatis architecto a illum ad facere incidunt ut. Suscipit autem laboriosam minima voluptate harum sequi quae nam minus, eligendi, quod in temporibus possimus a?
                </p>
            </div>
        </div>
    </div>
  )
}

export default About