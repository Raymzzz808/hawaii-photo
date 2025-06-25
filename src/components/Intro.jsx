import Button from './Button';
export default function Intro({introHeading, introCopy,introImageLink, ...props}){
    return(<>
    <section className="w-full h-[50vh]">
         <img className="w-auto" src={introImageLink} {...props}/>
         <h2 className="text-3xl font-bold"> {introHeading}</h2>
         <p className="text-lg font-thin"> {introCopy}</p>
         <Button {...props} btnName={btnName}/>
        </section>
    </>);

}