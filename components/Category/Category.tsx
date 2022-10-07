import React from 'react'

    const categories = [
        {
            title: 'Uniforms',
            subtitle: 'Smart Design for Smart Services',
        },
        {
            title: 'Soft Furnishing',
            subtitle: 'Freshness, Optimism, Honesty',
        },
        {
            title: 'White Labelling',
            subtitle: 'Productivity centric fabric tailoring',
        },
    ]

function Category() {
  return (
    <div className='relative top-12'>
        <div className='grid grid-cols-3 gap-x-5'>
            {categories.map((category) => (
                <div className='flex items-center bg-lime-200'>
                <div className='m-7'>
                <div className='w-20 h-20 bg-slate-400'></div>
                </div>
                <div>
                <h3 className='text-xl font-semibold'>{category.title}</h3>
                <p className='text-sm font-normal my-1'>{category.subtitle}</p>
                <span className='text-cyan-500'>View More</span>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Category