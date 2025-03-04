
interface SectionTitleProps {
    title: string;
    subTitle: string;
    description: string;
  }
  
  const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle, description }) => {
    return (
      <div className="text-center flex flex-col justify-center items-center gap-3 my-5">
        <h4 className="text-primary font-bold text-2xl">{title}</h4>
        <h1 className="font-bold text-5xl">{subTitle}</h1>
        <p className="font-semibold text-gray-500 lg:w-5/12 md:w-9/12">{description}</p>
      </div>
    );
  };
  
  export default SectionTitle;
  