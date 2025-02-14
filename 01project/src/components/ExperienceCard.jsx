import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({ index, experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img 
                        src={experience.icon} 
                        alt={experience.company_name} 
                        className='w-12 h-12 rounded-full object-contain' 
                    />
                </div>
            }
            position={index % 2 === 0 ? 'left' : 'right'}
        >
            <div className={`flex flex-col ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center`}>  
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point,index)=>(
                    <li key={index}
                    className='text-white-100 text-14 pl-1 tracking-wider'>
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
