import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaUser} from 'react-icons/fa6'
import { FaClock } from 'react-icons/fa';
import SideBar from '../components/Sidebar';


const SingleBlog = () => {
    const data= useLoaderData();
   

    const  {title,image,category,author,published_date,reading_time,content} =data[0];
  return (
    <div>
         <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className=' text-5xl lg:text-7xl leading-snug font-bold mb-5'>single blog</h2>
      </div>
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
          <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt="" className='w-full mx-auto rounded'></img>
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center'/>{author} | {published_date}</p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center'/>{reading_time}</p>
                <p className='text-base text-gray-500 mb-6'>{content}</p>
                <div className='text-base text-gray-500'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, asperiores? A veniam dolorum sequi suscipit eligendi hic delectus quos itaque? Nihil assumenda cumque cum maiores? Eaque nulla deleniti voluptates earum!</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolor laborum maiores praesentium voluptate, ipsum quam repudiandae ab, beatae voluptatum atque rerum fugiat et molestiae delectus! Ipsa eveniet quia dolores.</p>
               <br/>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, sapiente! Ducimus necessitatibus ullam amet! Suscipit voluptatibus architecto saepe totam, perferendis illum quam doloremque possimus voluptatem minima corporis tenetur ut recusandae porro ipsum nam sapiente id natus vero. Illo unde accusamus nam hic tempora, officia, rerum inventore in doloremque magnam adipisci harum itaque eius? Nobis voluptatibus reiciendis recusandae. Nostrum alias eaque dignissimos? Eligendi pariatur vel asperiores placeat commodi reprehenderit fugit sunt eius culpa nihil consequuntur assumenda expedita sequi ipsa tempore, illum consectetur non? Atque, esse nostrum possimus ducimus explicabo rerum excepturi laboriosam? Laboriosam, illum. Quod deleniti illum quis excepturi nobis odio provident eius hic quas illo magnam mollitia expedita velit iure, placeat accusamus aspernatur explicabo sequi laboriosam veritatis consequatur vitae sit. Esse expedita iure aut vero voluptatibus, dolorum fugiat dicta inventore quasi illum exercitationem numquam possimus, vitae molestias perferendis at reiciendis beatae, hic in nostrum id. Aliquid nostrum omnis incidunt ea.</p>
               <br/>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur illo, repellendus exercitationem hic iste similique ipsum reiciendis eum! Consequatur nulla tempore, ratione et cum, architecto in sapiente nisi voluptatibus incidunt blanditiis omnis sed! Laboriosam nesciunt iure nam explicabo ducimus magni quia, perferendis, voluptatum debitis enim quo est asperiores consequatur laborum vero velit culpa voluptates in! Quis assumenda quia at dolorum numquam voluptate culpa saepe quo, sint eveniet voluptates libero nemo explicabo asperiores maxime sunt. Eum, reprehenderit modi!</p>

                </div>
          </div>
          <div className='lg:w-1/2'>
            <SideBar/>
          </div>
      </div>
    </div>
  )
}

export default SingleBlog