export default function Button({ text, image }) {
  return (
    // <div className="border-grey text-grey border-2 p-4"> 
      image === undefined ? 
      <p className=" text-xl text-white shadow-sm border-grey text-grey border-2 p-4">
        {text}
      </p> : <img className="object-scale-down border-grey text-grey border-2 p-4 h-80 w-80" src={image}/>
    // </div>
  );
}
