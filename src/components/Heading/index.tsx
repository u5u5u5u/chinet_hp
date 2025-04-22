interface HeadingProps {
  title: string;
}

const Heading = (props: HeadingProps) => {
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return (
    <div className="text-center w-fit mx-auto mb-14">
      <h2 className="text-2xl md:text-5xl font-bold" id={slugify(props.title)}>
        {props.title}
      </h2>
      <hr className="border-0 h-1 bg-gradient-to-br from-[#5260FF] to-[#03FF4E] mt-1 md:mt-2" />
    </div>
  );
};

export default Heading;
