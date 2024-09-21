

function AboutPage() {

    function formD(e){
        
        e.target.value;

    }
    return (
        <>  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* About Us Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-700 mb-6">
          Welcome to ShoppyGlobe!
          At ShoppyGlobe, we’re passionate about making shopping easier, more enjoyable, and accessible for everyone, no matter where they are. Our platform offers a wide range of products from fashion to electronics, designed to meet the needs of today’s smart shoppers. With our seamless online experience, competitive prices, and reliable customer service, we’re here to change the way you shop!
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
              Our mission is simple: To bring the world to your doorstep. We believe that shopping should be convenient, affordable, and tailored to every individual’s unique preferences. Whether you’re looking for the latest trends or everyday essentials, we have everything in one place.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Our Values</h2>
              <p className="text-gray-600">
                Integrity, customer satisfaction, and commitment to quality are at the core of everything we do.
              </p>
            </div>
          </div>
          
        </div>
  
        {/* Contact Details Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          
          
          <p className="text-lg font-semibold">Have questions or need assistance? Our friendly support team is always ready to help.</p>
          
          {/* Email */}
          <div className="mb-6 mt-6">
            <h3 className="text-lg font-bold text-gray-900 ">Email:</h3>
            <a href="mailto:meghrajdewangan.raipur@gmail.com" target="_blank"><p className="text-gray-700">meghrajdewangan.raipur@gmail.com</p></a>
          </div>
  
          {/* Phone */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900">Phone:</h3>
            <p className="text-gray-700">8109912840</p>
          </div>
  
          
        </div>
      </div>
     
        </>

    )
}

export default AboutPage;