
const Gallery = () => {
    return (
      <>
        <div>
          <h2 className="text-5xl mt-5 mb-5 font-bold text-center">Gallery</h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://lumiere-a.akamaihd.net/v1/images/pp_frozen_herobanner_mobile_20501_ae840c59.jpeg?region=0,0,1024,768"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Frozen</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://lumiere-a.akamaihd.net/v1/images/pp_princess_rapunzel_static_mobile_20694_0171d854.jpeg?region=0%2C0%2C640%2C480"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Tangled</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://easydrawingart.com/wp-content/uploads/2019/08/How-to-Draw-Donald-Duck.jpg"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Donald Duck</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://1000wordphilosophy.files.wordpress.com/2019/06/sleeping-beauty.jpg?w=640"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Sleeping Beauty</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://media.vanityfair.com/photos/5834768dca6f7ee00ec2908a/master/w_2560%2Cc_limit/moana-review.jpg"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Moana</h2>
          </div>
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <figure>
              <img
                className="h-fit w-full object-cover"
                src="https://d23.com/app/uploads/2013/04/1180w-600h_mickey-mouse_1.jpg"
                alt="Shoes"
              />
            </figure>
            <h2 className="card-title mx-auto my-3">Mickey Mouse</h2>
          </div>
        </div>
      </>
    );
};

export default Gallery;