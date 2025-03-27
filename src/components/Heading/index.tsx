interface HeadingProps {
  title: string;
}

const Heading = (props: HeadingProps) => {
  return (
    <div className="text-center w-fit mx-auto mb-10">
      <h2 className="text-5xl font-bold">{props.title}</h2>
      <hr className="border-0 h-1 bg-gradient-to-br from-[#5260FF] to-[#03FF4E] mt-2" />
    </div>
  );
};

export default Heading;
