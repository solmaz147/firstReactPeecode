import React from 'react'

const ContactForm = () => {
  return (
    <div  className='anket d-flex justify-content-center py-5'>
        <form  className='py-5 px-5' action="">

          <h3 className='text-light'>Get in Touch</h3>
          <p className='text-light my-3'>Describe your issue below. Our manager will contact you as soon as possible.</p>
            <div className="form-qrup">
                
                <input className='text-white form-control bg-transparent border-0 border-bottom' type="text" name="ad" placeholder='Name'/>
            </div>
            <div className="form-qrup">
                
                <input className='my-3 form-control bg-transparent border-0 border-bottom' type="email" name="ePoct" placeholder='Email'/>
            </div>
            <div className="form-qrup">
                
               <textarea placeholder='message' className='form-control bg-transparent border-0 border-bottom' name="mesaj" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="knopka d-flex justify-content-center">
            <button  type="submit" className='mt-3 btn btn-success'>Send</button>
            </div>


        </form>
    </div>
  )
}

export default ContactForm