

const Hero = () => {
    return (
        <div className="bg-[url('hero.png')] h-[300px] w-full md:h-screen md:w-full bg-cover">
          <div className="pt-20 pl-20">
             <p className="text-purple-400 text-3xl font-bold mb-10">Adenstein</p>
          </div>
          <div className="flex items-center w-full h-screen pb-40 px-40">
              <div className="flex flex-col">
                <p className="text-white text-7xl font-bold mb-10">Curate Your Video</p>
                <p className="text-white text-xl ml-2 mb-5">Transform ideas into stunning videos effortlessly</p>
                <button type="button" className="w-32 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 my-2">Get Started</button>
              </div>
          </div>
        </div>
    )
}

export default Hero;