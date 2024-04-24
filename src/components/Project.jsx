export const Project = ({ id, title, description, images, frontendLink, backendLink, prototypeLink }) => {
  return (
    <section className='flex justify-center items-center flex-col py-10 border-b border-stone-500 mx-10 my-5'>
      <h4>{title}</h4>
      <p className='text-xs mt-1'>{description}</p>
      {images && (
        <div className='flex overflow-x-auto scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent py-3 gap-3 mx-10 max-h-[700px] max-w-[600px]'>
          {images.map((image, index) => (
            <img key={index} src={image} alt={title} />
          ))}
        </div>
      )}
      <div className="text-xs flex gap-10 mt-5">
      {frontendLink && <a href={frontendLink} target="_blank" rel="noopener noreferrer" className="hover:text-stone-400">View frontend code</a>}
        {backendLink && <a href={backendLink} target="_blank" rel="noopener noreferrer" className="hover:text-stone-400">View backend code</a>}
        {prototypeLink && <a href={prototypeLink} target="_blank" rel="noopener noreferrer" className="hover:text-stone-400">View prototype</a>}
      </div>
    </section>
  );
};
