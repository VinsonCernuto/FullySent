import React from 'react'

export default function ContactScreen() {
    return (
        <div class="main">
        <div class="shop_top">
          <div class="container">
              <div class="row">
                  <div class="col-md-7">
                    <div class="map">
                      <small><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=winter%20garden%20florida&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://yggtorrent-fr.com" ></a></small>
                    </div>
                  </div>
                  <div class="col-md-5">
                      <p class="m_8">Thank you for visiting Fully Sent Automotive.
  
                          For customer service inquiries, please complete the following information. 
                          
                          For order inquiries, please include your order number for faster service.</p>
                      <div class="address">
                                  <p>500 Lorem Ipsum Dolor Sit,</p>
                                     <p>22-56-2-9 Sit Amet, Lorem,</p>
                                     <p>USA</p>
                             <p>Phone:(00) 222 666 444</p>
                             <p>Fax: (000) 000 00 00 0</p>
                            <p>Email: <span>fullysent@Gmail.com</span></p>
                             <p>Follow on: <span>Facebook</span>, <span>Instagram,</span> <span>YouTube</span></p>
                     </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12 contact">
                    <form method="post" action="contact-post.html">
                      <div class="to">
                           <input type="text" class="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" />
                           <input type="text" class="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" />
                           <input type="text" class="text" value="Subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject';}" />
                      </div>
                      <div class="text">
                         <textarea value="Message:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}" >Message:</textarea>
                         <div class="form-submit">
                         <input name="submit" type="submit" id="submit" value="Submit" /><br />
                         </div>
                      </div>
                      <div class="clear"></div>
                     </form>
                   </div>
              </div>
           </div>
         </div>
        </div>
    )
}
