import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { blog } from "../components/Articles";

function BlogDetails() {
  const { id } = useParams();
  const blogDetails = blog.find((item) => item.slug === id);

  if (!blogDetails) return <div className='mt-40 px-11 text-center'>Blog not found</div>;

  const {
    title,
    image,
    author,
    date,
    content,
    contentTwo,
    questionOne,
    questionOne_ansOne,
    questionOne_ansTwo,
    questionOne_ansThree,
    questionOne_ansFour,
    questionTwo,
    questionTwo_ansOne,
    questionTwo_ansTwo,
    questionTwo_ansThree,
    questionTwo_ansFour,
    description
  } = blogDetails;

  return (
    <div className='mt-40 px-6 mb-20 flex flex-col items-center'>
        <div className='max-w-4xl w-full'>
            <div className="navigation flex mb-10 gap-2 items-center justify-start">
                <Link to={"/"} className="hover:text-purple-600 text-base md:text-lg">
                    Home
                </Link>
                <ChevronRight size={18} />
                <Link to={"/blog"} className="hover:text-purple-600 text-base md:text-lg">
                    Blog
                </Link>
                <ChevronRight size={18} />
                <p className="text-base truncate w-50 md:text-lg text-purple-600 cursor-pointer">
                    {title} 
                </p>
            </div>

            <h1 className='text-4xl md:text-6xl font-semibold mb-10 text-left leading-tight'>{title}</h1>

            <div className="flex gap-4 mb-6 text-gray-600 justify-start">
                <span className="font-medium text-purple-600">{author}</span>
                <span>|</span>
                <span>{date}</span>
            </div>

            <div className="image-part w-full mb-10 flex justify-center">
                <img src={image} alt={title} className="w-full h-auto max-h-[500px] object-cover rounded-xl" />
            </div>

            <div className="flex flex-col gap-6 text-lg text-gray-800">
                <p>{content}</p>
                <p>{contentTwo}</p>

                <div className='mt-4'>
                    <h2 className='text-3xl font-semibold mb-4'>{questionOne}</h2>
                    <ul className='flex flex-col gap-3 pl-5 list-disc'>
                        <li>{questionOne_ansOne}</li>
                        <li>{questionOne_ansTwo}</li>
                        <li>{questionOne_ansThree}</li>
                        <li>{questionOne_ansFour}</li>
                    </ul>
                </div>

                {questionTwo && (
                    <div className='mt-4'>
                        <h2 className='text-3xl font-semibold mb-4'>{questionTwo}</h2>
                        <ul className='flex flex-col gap-3 pl-5 list-disc'>
                            <li>{questionTwo_ansOne}</li>
                            <li>{questionTwo_ansTwo}</li>
                            <li>{questionTwo_ansThree}</li>
                            <li>{questionTwo_ansFour}</li>
                        </ul>
                    </div>
                )}

                <p className='mt-8 italic font-medium border-l-4 border-purple-600 pl-4'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails